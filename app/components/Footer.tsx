import Image from "next/image";

import { footerLinks } from "@/constants";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">Title</h4>
    <ul className="flex flex-col gap-2 font-normal">Links</ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12">
        <div className="flex items-start">
          <Image
            src="/logo-mustard.svg"
            width={115}
            height={38}
            alt="Design Hive"
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Design Hive: Where Designers Flourish. Cultivating Creativity,
            Sharing Vision, and Nurturing Artistry in a Community of Infinite
            Inspiration.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
