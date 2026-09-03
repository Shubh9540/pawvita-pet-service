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
  variant?: string;
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

export interface LocationDetailItem {
  id: string;
  image: string;
  heading: SectionHeadingData;
  title: string;
  subtitle: string;
  subtitleIcon: string;
  description: string[];
  overview: {
    title: string;
    icon: string;
    description: string[];
    image: string;
  };
  stats: {
    id: string;
    title: string;
    value: string;
    icon: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    image: string;
  };
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
  description?: string;
  services: ServiceItem[];
}

export interface ServiceDetailFeatureCard {
  icon: string;
  title: string;
  description?: string;
  list: string[];
}

export interface ServiceDetailData {
  id: string;
  title: string;
  icon?: string;
  image: string;
  
  badge?: string;
  mainHeading?: string;
  description1?: string;
  
  subHeading1?: string;
  description2?: string;
  
  subHeading2?: string;
  description3?: string;
  
  featureCards?: ServiceDetailFeatureCard[];
  
  // Fallback for older simpler structure
  description?: string;
  features?: string[];
}

export interface ServiceDetailSidebarData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  icon: string;
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
  shortDescription?: string;
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

export interface TeamGridData {
  heading: SectionHeadingData;
  title: string;
  description?: string;
  members: TeamMember[];
}

export interface TeamDetailExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface TeamDetailEducation {
  id: string;
  degree: string;
  institution: string;
  icon?: string;
}

export interface TeamDetailData {
  id: string;
  name: string;
  role: string;
  image: string;
  
  // Left Sidebar
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
  contactCard?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    icon: string;
  };
  expertiseTitle?: string;
  expertise?: string[];
  whyChooseUs?: {
    title: string;
    description: string;
    icon: string;
  };

  // Right Content
  about?: {
    titlePrefix: string;
    titleName: string;
    description: string[];
  };
  skillsTitle?: string;
  professionalSkills?: string[];
  experienceTitle?: string;
  experience?: TeamDetailExperience[];
  educationTitle?: string;
  education?: TeamDetailEducation[];
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  icon: string;
  isPopular: boolean;
  badgeText?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonUrl: string;
}

export interface PricingData {
  heading: SectionHeadingData;
  title: string;
  description: string;
  topFeatures: FeatureItem[];
  cards: PricingCardItem[];
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

export interface AboutMissionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export interface AboutMissionData {
  heading: SectionHeadingData;
  title: string;
  subtitle: string;
  items: AboutMissionItem[];
  bottomBanner: {
    icon: string;
    title: string;
    subtitle: string;
  };
}

export interface PawVitaTemplateData {
  common: {
    globalUI: {
      loading: string;
      notFound: string;
    };
    aboutBreadcrumb?: BreadcrumbData;
    missionVisionBreadcrumb?: BreadcrumbData;
    whyChooseUsBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailBreadcrumb?: BreadcrumbData;
    teamBreadcrumb?: BreadcrumbData;
    teamDetailBreadcrumb?: BreadcrumbData;
    pricingBreadcrumb?: BreadcrumbData;
    locationDetailBreadcrumb?: BreadcrumbData;
  };
  categories: {
    PawVita: {
      templateComponents: any;
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
        AboutMission?: {
          variants: {
            PawVitaAboutMission1: AboutMissionData;
          };
        };
        AboutMissionLight?: {
          variants: {
            PawVitaAboutMissionLight1: AboutMissionData;
          };
        };
        Services?: {
          variants: {
            PawVitaServices1: ServicesData;
            PawVitaServicesTabs1: ServicesData;
            PawVitaServicesGrid1: ServicesData;
          };
        };
        ServiceDetails?: {
          variants: {
            PawVitaServiceDetails1: {
              items: ServiceDetailData[];
              sidebar?: ServiceDetailSidebarData;
            };
          };
        };
        LocationDetails?: {
          variants: {
            PawVitaLocationDetails1: {
              items: LocationDetailItem[];
            };
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
        TeamGrid?: {
          variants: {
            PawVitaTeamGrid1: TeamGridData;
          };
        };
        TeamDetails?: {
          variants: {
            PawVitaTeamDetails1: {
              items: TeamDetailData[];
            };
          };
        };
        Pricing?: {
          variants: {
            PawVitaPricing1: PricingData;
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
