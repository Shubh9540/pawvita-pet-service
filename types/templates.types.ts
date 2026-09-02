export interface TopBarData {
  phone?: string;
  phoneIcon?: string;
  email?: string;
  emailIcon?: string;
  socialTitle?: string;
  socialLinks?: {
    id: string;
    icon: string;
    url: string;
  }[];
}

export interface BreadcrumbPath {
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage: string;
}
export interface FeatureItem {
  id: string;
  icon: string;
  text: string;
}

export interface SectionHeadingData {
  title: string;
  icon?: string;
  variant?: 'simple' | 'decorated';
}

export interface HeroData {
  subtitle: string;
  subtitleIcon: string;
  title: string;
  description: string;
  button: {
    text: string;
    url: string;
    icon: string;
  };
  features: FeatureItem[];
  bgImage: string;
}

export interface LocationItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface ServiceAreasData {
  heading: SectionHeadingData;
  title: string;
  locations: LocationItem[];
  bgImage?: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url?: string;
  subLinks?: {
    id: string;
    label: string;
    url: string;
  }[];
}

export interface HeaderData {
  image: string;
  imageAlt: string;
  navLinks: LinkItem[];
  contactButton?: {
    text: string;
    url: string;
    icon?: string;
  };
}

export interface AboutUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  features: AboutUsFeature[];
  button: {
    text: string;
    url: string;
    icon?: string;
  };
  image: string;
  imageAlt: string;
  trustedBadge: {
    title: string;
    count: string;
    subtitle: string;
    avatars: string[];
    avatarAlt: string;
  };
  experienceBadge: {
    years: string;
    text: string;
    icon: string;
  };
}

export interface ServiceItem {
  id: string;
  image: string;
  icon: string;
  title: string;
  titleCollapsed: string;
  description: string;
  features: string[];
  number: string;
  url: string;
}

export interface ServicesData {
  heading: SectionHeadingData;
  title: string;
  services: ServiceItem[];
}

export interface WhyChooseUsTab {
  id: string;
  title: string;
  description: string;
  icon: string;
  number: string;
  image: string;
}

export interface WhyChooseUsData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  tabs: WhyChooseUsTab[];
  gallery: string[];
}

export interface CounterItem {
  id: string;
  icon: string;
  number: number;
  suffix: string;
  label: string;
}

export interface CounterData {
  items: CounterItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  isActive?: boolean;
}

export interface TeamData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  leftImage: string;
  badge: {
    title: string;
    subtitle: string;
    icon: string;
  };
  members: TeamMember[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqsData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  leftImage: string;
  cards: FaqCard[];
  faqs: FaqItem[];
}

export interface BlogPost {
  id: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface BlogsData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  featuredPost: BlogPost;
  posts: BlogPost[];
  viewAllButton: {
    text: string;
    url: string;
    icon?: string;
  };
}

export interface FooterContactItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FooterLinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

export interface FooterData {
  contactItems: FooterContactItem[];
  columns: FooterColumn[];
  copyrightText: string;
  socialLinks: {
    id: string;
    icon: string;
    url: string;
  }[];
}

export interface PawVitaTemplateData {
  common: {
    globalUI: {
      loading: string;
      notFound: string;
    };
  };
  categories: {
    PawVita: {
      templateComponents: any;
      common?: {
        Breadcrumb?: BreadcrumbData;
      };
      sections: {
        TopBar?: {
          variants: {
            PawVitaTopBar1: TopBarData;
          };
        };
        Header: {
          variants: {
            PawVitaHeader1: HeaderData;
          };
        };
        Footer?: {
          variants: {
            PawVitaFooter1: FooterData;
          };
        };
        Hero?: {
          variants: {
            PawVitaHero1: HeroData;
          };
        };
        ServiceAreas?: {
          variants: {
            PawVitaServiceAreas1: ServiceAreasData;
          };
        };
        AboutUs?: {
          variants: {
            PawVitaAboutUs1: AboutUsData;
          };
        };
        Services?: {
          variants: {
            PawVitaServices1: ServicesData;
          };
        };
        WhyChooseUs?: {
          variants: {
            PawVitaWhyChooseUs1: WhyChooseUsData;
          };
        };
        Counter?: {
          variants: {
            PawVitaCounter1: CounterData;
          };
        };
        Team?: {
          variants: {
            PawVitaTeam1: TeamData;
          };
        };
        Faqs?: {
          variants: {
            PawVitaFaqs1: FaqsData;
          };
        };
        Blogs?: {
          variants: {
            PawVitaBlogs1: BlogsData;
          };
        };
      };
    };
  };
}
