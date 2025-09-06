import Link from "next/link";
import React from "react";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Business School Magazine",
      filename: "Business School Magazine Final.pdf",
      description:
        "The latest edition of our Business School Magazine featuring cutting-edge research, faculty insights, and student achievements in the world of business.",
      year: "2024",
      category: "Business Education",
      image: "/images/al-ijmal.png",
      link: "https://drive.google.com/file/d/1qi1HJag1TLKmWDzoVF-gGM0q67AxnclU/view",
    },
    {
      id: 2,
      title: "September 2023 Edition",
      filename: "September 2023 v2.pdf",
      description:
        "A comprehensive quarterly publication covering industry trends, academic developments, and innovative research findings from September 2023.",
      year: "2023",
      category: "Quarterly Review",
      image: "/images/al-ijmal-2.png",
      link: "https://drive.google.com/file/d/1XiVmG3xc_9gGxa-J4WPxzmxLBbqYhDi5/view",
    },
    {
      id: 3,
      title: "Al Ijmal Magazine 1445H",
      filename: "Al Ijmal Magazine 1445H v6.pdf",
      description:
        "Al Ijmal Magazine presents scholarly articles and research in Islamic studies, contemporary issues, and academic discourse for the Hijri year 1445.",
      year: "1445H",
      category: "Islamic Studies",
      image: "/images/al-ijmal-3.png",
      link: "https://drive.google.com/file/d/1xXIJapMFF6yEBY3pMEZHEJ05BnJuxhzA/view",
    },
    {
      id: 4,
      title: "JSBS Magazine Issue 4",
      filename: "JSBS Magazine Issue 4_Print.pdf",
      description:
        "The fourth issue of JSBS Magazine featuring groundbreaking research, case studies, and professional insights from leading industry experts.",
      year: "2024",
      category: "Research Journal",
      image: "/images/jsbs-magzine.png",
      link: "https://drive.google.com/file/d/1wOt2SeRVU8s3sYLUfENm79MWYGNH13om/view",
    },
    {
      id: 5,
      title: "Maaraz Magazine",
      filename: "Maaraz Magazine v2.pdf",
      description:
        "Maaraz Magazine showcases innovative perspectives, cultural insights, and academic excellence through carefully curated content and research.",
      year: "2024",
      category: "Cultural Studies",
      image: "/images/maraaz.png",
      link: "https://drive.google.com/file/d/1VfgL5Q-_ti4do87lXXEiMS_cqwBs9TLz/view",
    },
  ];

  const handleViewPublication = (filename) => {
    window.open(`/publications/${filename}`, "_blank");
  };

  return (
    <>
      {/* Bootstrap CSS */}

      <div className="container rbt-section-gap px-4 px-lg-0">
        {/* Header Section */}
        <div className="header-section">
          <div className="d-flex flex-column align-items-center section-title">
            <span className="subtitle bg-coral-opacity">Publications</span>
            <h2 className="page-title">Annual Magazines</h2>
          </div>

          <p className="page-description">
            Discover our comprehensive collection of academic publications,
            featuring cutting-edge research, industry insights, and scholarly
            contributions that shape the future of business education and
            Islamic studies.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="publications-grid">
          {publications.map((publication) => (
            <div key={publication.id} className="publication-card">
              <div className="card-image-container">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <i className="fas fa-eye overlay-icon"></i>
                </div>
                <div className="year-badge">{publication.year}</div>
              </div>

              <div className="card-content">
                <h4 className="card-title">{publication.title}</h4>
                <p className="card-description">{publication.description}</p>

                <div className="card-meta">
                  <div className="meta-item">
                    <i className="fas fa-tag"></i>
                    {publication.category}
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-file-pdf"></i>
                    PDF Format
                  </div>
                </div>

                <Link
                  target="_blank"
                  href={publication.link}
                  className="view-btn"
                >
                  <span>
                    View Publication
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Publications;
