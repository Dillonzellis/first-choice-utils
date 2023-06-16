/* eslint-disable @next/next/no-img-element */
import Container from "./Container";
import ContentHero from "./ContentHero";
import ContentSection from "./ContentSection";
import LinkStyles from "./LinkStyles";
import StyledList from "./StyledList";

export default function Home() {
  return (
    <main>
      <ContentHero />
      <ContentSection>
        <Container className="tw-bg-white tw-text-black">
          <div className="xl:tw-grid-cols-2 tw-grid tw-gap-12 tw-items-center">
            <div className="tw-flex tw-flex-col tw-gap-4 tw-order-2 xl:tw-order-1">
              <div>
                <div className="tw-text-2xl tw-font-semibold tw-pb-2 tw-text-primary-400">
                  Shipping Address:
                </div>
                <div>1st Choice Credit Union</div>
                <div>Attn: Back to School Drive</div>
                <div>315 Auburn Ave</div>
                <div>Atlanta, GA 30303</div>
              </div>
              <div className="tw-text-lg tw-font-semibold">
                Suggested School Supplies:
              </div>
              <div className="tw-flex tw-gap-4 md:tw-gap-12 tw-flex-col md:tw-flex-row">
                <StyledList
                  items={[
                    "Book Bags",
                    "Glue Sticks",
                    "Crayons",
                    "3-Ring Binders",
                    "#2 pencils",
                    "Tab dividers",
                    "Sharpeners",
                    "Pocket dividers",
                    "Color pencils",
                  ]}
                />
                <StyledList
                  items={[
                    "Composition notebooks",
                    "Spiral notebooks",
                    "Graph paper",
                    "3x5 notecards",
                    "School scissors",
                    "Erasers",
                    "Protractors",
                    "Calculators",
                    "Dictionaries",
                  ]}
                />
                <StyledList
                  items={[
                    "Safety compasses",
                    "Thesauruses",
                    "Thesauruses",
                    "Scientific calculators",
                    "Ink pens",
                    "Flash drives",
                    "Rulers",
                    "Notebook paper",
                  ]}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <div>
                  1st Choice team members will host a Back-to-School event on
                  July 15th at the Auburn Office – Click here for link to event{" "}
                </div>
                <div>
                  If you have questions about the Back-to-School drive, please
                  reach out to{" "}
                  <LinkStyles
                    href="mailto:info@1stchoicecu.org"
                    text=" info@1stchoicecu.org"
                  />{" "}
                  or call member services and speak to your branch
                  representative.
                </div>
              </div>
            </div>
            <div className="tw-order-1">
              <img
                className="tw-rounded-xl tw-shadow-lg tw-mx-auto"
                src="https://www.1stchoicecu.org/wp-content/uploads/2023/06/School-Supply-Drive-8-1.jpg"
                alt="school drive"
              />
            </div>
          </div>
        </Container>
      </ContentSection>
    </main>
  );
}
