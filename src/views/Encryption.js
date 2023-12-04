import { Markdown } from 'grommet';
import React from 'react';
import { AppBar } from '../components/AppBar';
import ContentWrapper from '../shared/react-pure/ContentWrapper';

export function Encryption() {
  return (
    <>
      <AppBar title="Encrypt37: How encryption works here?" hasBack />
      <ContentWrapper>
        <Markdown>
          I use the famous [openpgpjs](https://github.com/openpgpjs/openpgpjs) library (used by
          [Proton](https://proton.me/)) to do the end-to-end encryption. See what is PGP
          [here](https://proton.me/blog/what-is-pgp-encryption).
        </Markdown>
        <Markdown>## When you signup:</Markdown>
        <Markdown>
          1. Your device generates a public & private key pair.
          
          2. Then your device encrypts the
          private key with your password;
          
          3. Then your device sends your username, public key,
          encrypted private key to server;
        </Markdown>
        **Your password never leaves your device!!!**
      </ContentWrapper>
    </>
  );
}
