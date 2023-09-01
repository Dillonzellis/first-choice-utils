import Container from "@/app/components/Container";
import LinkStyles from "@/app/components/LinkStyles";

import { ChildrenProps } from "@/lib/types";

const Wrapper: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="tw-space-y-1">{children}</div>;
};

const CreditUnionDayPage = () => {
  return (
    <Container>
      <div className="tw-space-y-4">
        <div className="tw-text-xl tw-font-semibold">
          Please join the 1st Choice Credit Union for International Credit Union
          Day On October 19 to provide basic winter supplies to our local
          homeless community.
        </div>
        <Wrapper>
          <div>
            <strong>The Need</strong>
          </div>{" "}
          <div>
            We are currently collecting Hats, Gloves and Socks for the local
            homeless and underserved children in schools in the area. Together,
            we will help provide warmth and comfort to our community.
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <strong>The Solution</strong>
          </div>
          <div>
            From August 30- October 14, stop by a branch location and drop off
            your new hats, gloves, and socks in the designated box, OR ship to
            our Main Office location while shopping online.
          </div>
          <div>
            You may also shop and ship with ease on Amazon using this{" "}
            <LinkStyles
              text="https://a.co/ebk8fvZ"
              href="https://a.co/ebk8fvZ"
            />
          </div>
          <div>
            Each donation will receive a entry for drawing on October 19th.
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <strong>Shipping Address:</strong>
          </div>
          <div>1st Choice Credit Union</div>
          <div>Attn: International Credit Union Day</div>
          <div>315 Auburn Ave</div>
          <div>Atlanta, GA 30303</div>
        </Wrapper>
        <Wrapper>
          <div>
            <strong className="tw-text-lg">Suggested Donations:</strong>
          </div>
          <div>
            <strong>New Hats</strong>
          </div>
          <div>
            <strong>New Gloves</strong>
          </div>
          <div>
            <strong>New Socks</strong>
          </div>
        </Wrapper>
        <div>
          1st Choice team members will distribute new items to local homeless
          community and local school age children.
        </div>
        <div>
          If you have questions about the Hat, glove and sock drive, please
          reach out to{" "}
          <LinkStyles
            text="info@1stchoicecu.org"
            href="mailto:info@1stchoicecu.org"
          />{" "}
          or call member services and speak to your branch representative.
        </div>
      </div>
    </Container>
  );
};

export default CreditUnionDayPage;
