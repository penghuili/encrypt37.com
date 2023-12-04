import { Anchor, Heading, Image, Markdown } from 'grommet';
import React from 'react';
import encrypt37Logo from '../assets/encrypt37.png';
import { Footer } from '../components/Footer';
import { Paragraph } from '../components/Paragraph';
import ContentWrapper from '../shared/react-pure/ContentWrapper';
import Divider from '../shared/react-pure/Divider';
import HorizontalCenter from '../shared/react-pure/HorizontalCenter';
import Spacer from '../shared/react-pure/Spacer';

export function Home() {
  return (
    <>
      <ContentWrapper>
        <HorizontalCenter margin="2rem 0 0">
          <Image src={encrypt37Logo} width="56px" />
          <Heading level="2" margin="0 0 0 1rem">
            Encrypt37
          </Heading>
        </HorizontalCenter>
        <Heading level="3">Safe corner for your words and files.</Heading>
        <Divider />
        <Spacer />
        <Paragraph>
          Do you feel comfortable sending your personal data to their servers, without encryption?
        </Paragraph>
        <Paragraph>
          With Encrypt37, nobody, even those who have access to the database, can read your data.
        </Paragraph>
        <Paragraph>
          Because all your words and files are encrypted on your device before they are sent to the
          server.
        </Paragraph>
        <Divider />
        <Spacer />
        <Paragraph>They see messages like this:</Paragraph>
        <Markdown>
          ``` wy4ECQMI0mqGWr3Sfxjgg0dMgGPtu69tP5XUKDawXdVIOqeB1qCalEZHejkJ
          GD+R0moBLGbfxtISIz2tL5zcc+638fqTJUwhoGOaeHbvERBNuAYgr4ZASR39
          e5x4ujQId8RkDTOySDmomDusVgIOPK6Cl9m+FpEMwKaTL8xdXXBPp/C8IfaO CV6jMRdz+Kg+jahFOJevsgMkObJk
          =rLx6 ```
        </Markdown>
        <Spacer />
        <Paragraph>or files like this:</Paragraph>
        <Anchor
          label="file37_file_20230928203743_taIqMr7cfR1.p37"
          href="/file37_file_20230928203743_taIqMr7cfR1.p37"
          target="_blank"
        />
        <Spacer />
        <Divider />
        <Spacer />
        <Paragraph>
          Learn more about{' '}
          <Anchor label="encryption" href="https://encrypt37.com/encryption/" target="_blank" />
        </Paragraph>
        <Paragraph>
          And check the{' '}
          <Anchor
            label="source code"
            href="https://github.com/penghuili/Encrypt37"
            target="_blank"
          />
        </Paragraph>

        <Spacer />
        <Divider />
        <Spacer />

        <Heading level="3" margin="0 0 1rem">
          Dance like nobody's watching
        </Heading>
        <Image src="/dance.gif" />

        <Spacer />
        <Divider />
        <Spacer />

        <Heading level="3" margin="0 0 1rem">
          And
        </Heading>
        <Paragraph>No ads.</Paragraph>
        <Paragraph>No tracking.</Paragraph>
        <Paragraph>No AI (Proudly).</Paragraph>

        <Spacer />
        <Divider />
        <Spacer />

        <Heading level="3" margin="0 0 1rem">
          And
        </Heading>
        <Paragraph>View all posts in a timeline</Paragraph>
        <Paragraph>Write long post with images</Paragraph>
        <Paragraph>Organize posts with tags</Paragraph>
        <Paragraph>Filter by time range</Paragraph>
        <Paragraph>Today in history</Paragraph>
        <Paragraph>Export post as PDF</Paragraph>
        <Paragraph>One click to cover your screen</Paragraph>

        <Spacer />
        <Divider />
        <Spacer />

        <Heading level="3" margin="0 0 1rem">
          Pricing
        </Heading>
        <Paragraph>600GB of storage.</Paragraph>
        <Paragraph>14 days free trial.</Paragraph>
        <Paragraph>Then only $6 per month or $60 per year (SAVE 16.6%).</Paragraph>

        <Spacer />
        <Divider />
        <Spacer />

        <Anchor label="Start now" href="https://app.encrypt37.com" target="_blank" />

        <Footer />
      </ContentWrapper>
    </>
  );
}
