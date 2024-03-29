import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-slate-900 text-yellow-50">
        <div>
          <p className="font-semibold md:text-lg"> Technocryptics</p>
          <p>
            A graphic designing club of Rajasthan Technical University, Kota
          </p>
        </div>
        <div>
          <span className="footer-title">You can reach us out at :</span>
          <div className="grid grid-flow-row gap-2">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/technocryptics/"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/BbApViMfYCwCaAzNwLO2QB"
            >
              Whatsapp Group
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linktr.ee/technocryptics"
            >
              Linktree
            </a>
          </div>
        </div>
      </footer>
     <p className="bg-slate-900 text-slate-400 hover:text-slate-300 font-semibold pb-3 text-center">
        <a
          href="https://github.com/pushkarydv/technocryptics"
          rel="noopener noreferrer"
          target="_blank"
          className="inline-block transition-all no-underline text-inherit hover:brightness-110 mt-2"
          title="Website developed by Pushkar Yadav"
        >
          &lt;/&gt;   
        </a>
      </p>
    </>
  );
}
