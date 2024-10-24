/* eslint-disable react/no-unescaped-entities */
import Button from "../../components/shared/button";
import img1 from "../../assets/img1.jpg";

function Extra() {
  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:gap-x-20 lg:gap-x-64">
        <div className="flex flex-col ">
          <p className="text-amethyst text-base">Summer, 2023</p>
          <img src={img1} alt="" />
          <p>
            Summer crouches at the stage's edge, camera aimed upward. Her
            all-black outfit and focused expression blend with the venue's dim
            lighting, while her "All Access" pass hints at the world she's
            capturing through her lens.
          </p>
          <div className="mt-4">
            <Button text="View BTS" />
          </div>
        </div>
        <div className="flex flex-col pl-28">
          <p className="text-amethyst text-base">2023</p>
          <img src={img1} alt="" />
          <p>
            A guitarist, backlit and leaning into a solo, is frozen in Summer's
            frame. His silhouette stands stark against a burst of stage light,
            strings visibly vibrating as the crowd reaches toward him.
          </p>
          <div className="mt-4">
            <Button text="View Gallery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
