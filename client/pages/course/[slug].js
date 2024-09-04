import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { Context } from "../../context";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { Rate, Card, Button, Form, Input, Alert, Space } from "antd";

const SingleCourse = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(course.reviews || []);
  const [averageRating, setAverageRating] = useState(0);

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    // Calculate average rating when reviews change
    const calculateAverageRating = () => {
      if (reviews.length === 0) {
        setAverageRating(0);
        return;
      }
      const totalRating = reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const avgRating = totalRating / reviews.length;
      setAverageRating(avgRating);
    };

    calculateAverageRating();
  }, [reviews]);

  useEffect(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log("Check Enrollment", data);
    setEnrolled(data);
  };

  const router = useRouter();
  const { slug } = router.query;

  const handlePaidEnrollment = async () => {
    try {
      setLoading(true);

      if (!user) router.push("/login");

      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);

      const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Enrollment Failed. Try again");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    e.preventDefault();
    try {
      if (!user) router.push("/login");

      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);

      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast(data.message);
      setLoading(false);
      return router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      toast("Enrollment failed. Try again");
      console.log(err);
      setLoading(false);
    }
  };

  const handleReviewSubmit = async () => {
    try {
      const { data } = await axios.post(
        `/api/course/${course._id}/review`,
        {
          rating,
          comment,
          name: user.name,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      // Update state with new review
      setReviews([...reviews, { rating, comment, name: user.name }]);
      setRating(0);
      setComment("");
      toast.success(data.message);
    } catch (error) {
      console.error(
        "Error submitting review:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        user={user}
        loading={loading}
        handlePaidEnrollment={handlePaidEnrollment}
        handleFreeEnrollment={handleFreeEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
        averageRating={averageRating}
      />

      <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
      />

      {course.lessons && (
        <SingleCourseLessons
          lessons={course.lessons}
          setPreview={setPreview}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className="bg-light border mt-5">
        <div className="reviews-section mt-5 mx-5 col-md-10">
          <h3 className="mb-3 mt-4">Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <Card
                key={index}
                className="mb-2 mx-4"
                size="small"
                bordered={false}
              >
                <Card.Meta
                  title={review.name}
                  description={
                    <>
                      <Rate disabled value={review.rating} />
                      <p className="mt-1 mb-0">{review.comment}</p>
                    </>
                  }
                />
                <hr />
              </Card>
            ))
          ) : (
            <Alert message="No reviews yet" type="info" />
          )}
        </div>

        <div className="review-form mt-4 mx-5">
          <h3 className="mb-3">Leave a Review</h3>
          <Form onFinish={handleReviewSubmit} layout="vertical">
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: "Please select a rating!" }]}
            >
              <Rate onChange={(value) => setRating(value)} value={rating} />
            </Form.Item>
            <Form.Item
              className="col-md-5"
              name="comment"
              label="Comment"
              rules={[
                { required: true, message: "Please enter your comment!" },
              ]}
            >
              <Input.TextArea
                rows={7}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit Review
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;
