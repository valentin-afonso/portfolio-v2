import IconReact from "@/components/svg/tech/IconReact";
import IconAdobeXd from "@/components/svg/tech/IconAdobeXd";
import IconAdobeIllustrator from "@/components/svg/tech/IconAdobeIllustrator";
import IconContao from "@/components/svg/tech/IconContao";
import IconCss from "@/components/svg/tech/IconCss";
import IconDato from "@/components/svg/tech/IconDato";
import IconDrupal from "@/components/svg/tech/IconDrupal";
import IconFigma from "@/components/svg/tech/IconFigma";
import IconFlutter from "@/components/svg/tech/IconFlutter";
import IconGithub from "@/components/svg/tech/IconGithub";
import IconHtml from "@/components/svg/tech/IconHtml";
import IconIonic from "@/components/svg/tech/IconIonic";
import IconJavascript from "@/components/svg/tech/IconJavascript";
import IconLaravel from "@/components/svg/tech/IconLaravel";
import IconNetlifly from "@/components/svg/tech/IconNetlifly";
import IconNext from "@/components/svg/tech/IconNext";
import IconPhotoshop from "@/components/svg/tech/IconPhotoshop";
import IconPhp from "@/components/svg/tech/IconPhp";
import IconPrestashop from "@/components/svg/tech/IconPrestashop";
import IconStrapi from "@/components/svg/tech/IconStrapi";
import IconSwift from "@/components/svg/tech/IconSwift";
import IconSymfony from "@/components/svg/tech/IconSymfony";
import IconTailwind from "@/components/svg/tech/IconTailwind";
import IconTypescript from "@/components/svg/tech/IconTypescript";
import IconVercel from "@/components/svg/tech/IconVercel";
import IconVue from "@/components/svg/tech/IconVue";
import IconWordpress from "@/components/svg/tech/IconWordpress";
import IconPayload from "@/components/svg/tech/IconPayload";
import IconApiPlateform from "@/components/svg/tech/IconApiPlateform";
import IconDocker from "@/components/svg/tech/IconDocker";
import IconPrismic from "@/components/svg/tech/IconPrismic";
import IconExpress from "@/components/svg/tech/IconExpress";
import IconOpquast from "@/components/svg/tech/IconOpquast";
import IconHono from "@/components/svg/tech/IconHono";
import IconMongodb from "@/components/svg/tech/IconMongodb";
import IconMysql from "@/components/svg/tech/IconMysql";

type TechName = string;

export default function Skill({ skill }: any) {
  const techIconMap: Record<TechName, React.ComponentType> = {
    react: IconReact,
    next: IconNext,
    javascript: IconJavascript,
    PHP: IconPhp,
    html: IconHtml,
    css: IconCss,
    figma: IconFigma,
    prestashop: IconPrestashop,
    contao: IconContao,
    tailwind: IconTailwind,
    adobeXD: IconAdobeXd,
    illustrator: IconAdobeIllustrator,
    dato: IconDato,
    drupal: IconDrupal,
    flutter: IconFlutter,
    github: IconGithub,
    ionic: IconIonic,
    laravel: IconLaravel,
    neltifly: IconNetlifly,
    photoshop: IconPhotoshop,
    strapi: IconStrapi,
    swift: IconSwift,
    symfony: IconSymfony,
    typescript: IconTypescript,
    vercel: IconVercel,
    vue: IconVue,
    wordpress: IconWordpress,
    payload: IconPayload,
    apiplatform: IconApiPlateform,
    docker: IconDocker,
    prismic: IconPrismic,
    express: IconExpress,
    hono: IconHono,
    OPQUAST: IconOpquast,
    mongoDB: IconMongodb,
    mySQL: IconMysql,
  };
  const IconComponent = techIconMap[skill.skill];
  return <li>{IconComponent && <IconComponent />}</li>;
}