import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const { Meta } = Card;

const CourseCard = ({ course, averageRating }) => {
  const { name, instructor, price, image, slug, paid, category } = course;

  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="course-card mb-4 border border-dark border-3 rounded mt-2 mb-5 mx-auto"
          cover={
            <img
              src={image.Location}
              alt={name}
              className="course-card-image p-2 mx-auto"
            />
          }
        >
          <hr />
          <h2 className="text-dark">{name}</h2>
          <p>By {instructor.name}</p>
          <Badge
            count={category}
            style={{ backgroundColor: "#6a00ff" }}
            className="pb-2"
          />
          <h4 className="pt-2">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "eur",
                })
              : "Free"}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
