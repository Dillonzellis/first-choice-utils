import React from "react";
import Container from "./Container";
import ContentSection from "./ContentSection";

const ContentHero = () => {
  return (
    <div className="bg-primary-gradient">
      <ContentSection>
        <Container className="tw-text-white">
          <h1>Provide School Supplies to Students</h1>
          <div>
            Please join the 1st Choice Credit Union to provide basic school
            supplies for students.
          </div>
        </Container>
      </ContentSection>
    </div>
  );
};

export default ContentHero;
