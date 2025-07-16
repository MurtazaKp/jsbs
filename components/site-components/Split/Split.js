import Image from "next/image";

import SplitData from "@/data/elements/split.json";

const Split = () => {
  return (
    <>
      {SplitData &&
        SplitData.splitOne.map((data, index) => (
          <div className="row g-0 align-items-center" key={index}>
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="thumbnail image-left-content">
                <Image
                  src={data.img}
                  width={960}
                  height={650}
                  alt="split Images"
                />
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="split-inner">
                <div className="shape">
                  <Image
                    src={data.imgIcon}
                    width={96}
                    height={96}
                    alt="Shape Images"
                  />
                </div>
                <h4
                  className="title sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  Campus Facilities
                </h4>
                <p
                  className="description has-small-font-size sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  Aljamea-Tus-Saifiyah Business School (JSBS) has campuses at
                  Kenya & India. The campuses are usually designed to support an
                  engaging learning environment with various facilities,
                  including classrooms, libraries, computer labs, and spaces for
                  extracurricular activities. Additionally, institutions like
                  JSBS may also host seminars, workshops, and guest lectures to
                  enhance students' learning experiences.
                </p>
                <p
                  className="description has-small-font-size sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  Aljamea-Tus-Saifiyah Business School features a range of
                  modern facilities designed to enhance the learning experience.
                  The campus includes well-equipped classrooms with advanced
                  audio-visual technology, dedicated seminar rooms, and a
                  spacious auditorium for events and lectures. Additionally,
                  students have access to a comprehensive library housing a vast
                  collection of academic resources, study spaces, and
                  collaborative areas. The campus also offers with
                  state-of-the-art software and high-speed internet, alongside
                  recreational facilities, such as a open spaces for relaxation
                  and social interaction. Furthermore, the institution
                  emphasizes a conducive learning environment with various
                  support services, including academic advising and career
                  guidance. Additionally, there are often recreational areas and
                  hostels that facilitates a holistic lifestyle for students.
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Split;
