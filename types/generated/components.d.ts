import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    icon: 'television';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
  };
}

export interface SectionsActiveByDefault extends Struct.ComponentSchema {
  collectionName: 'components_sections_active_by_defaults';
  info: {
    displayName: 'Active By Default';
  };
  attributes: {};
}

export interface SectionsCategory extends Struct.ComponentSchema {
  collectionName: 'components_sections_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGalleryItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_items';
  info: {
    displayName: 'Gallery Items';
  };
  attributes: {};
}

export interface SectionsLeaderItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_leader_items';
  info: {
    displayName: 'Leader Item';
  };
  attributes: {
    designation: Schema.Attribute.String;
    expanded: Schema.Attribute.Boolean;
    expandedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoType: Schema.Attribute.Enumeration<['youtube', 'upload']>;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface SectionsLeadershipThoughts extends Struct.ComponentSchema {
  collectionName: 'components_sections_leadership_thoughts';
  info: {
    displayName: 'Leadership Thoughts';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    leaderItem: Schema.Attribute.Component<'sections.leader-item', true>;
  };
}

export interface SectionsLifeAtRaymondRealty extends Struct.ComponentSchema {
  collectionName: 'components_sections_life_at_raymond_realties';
  info: {
    displayName: 'Life At Raymond Realty';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    galleryItems: Schema.Attribute.Component<'shared.gallery-items', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsMadeForMore extends Struct.ComponentSchema {
  collectionName: 'components_sections_made_for_mores';
  info: {
    displayName: 'Made For More';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'sections.tabs', true>;
  };
}

export interface SectionsOurValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_values_sections';
  info: {
    displayName: 'Our Values Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
    ValueItem: Schema.Attribute.Component<'sections.category', true>;
  };
}

export interface SectionsStatsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_grids';
  info: {
    displayName: 'Stats Card';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['gray', 'red']>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['stats', 'image']>;
  };
}

export interface SectionsStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_sections';
  info: {
    displayName: 'Stats Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.cards', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    activeByDefault: Schema.Attribute.Boolean;
    contentImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contentItems: Schema.Attribute.Component<'shared.content-items', true>;
    tabTitle: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['gray', 'red']>;
    hoverContent: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['stats', 'image']>;
  };
}

export interface SharedContentItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_items';
  info: {
    displayName: 'Content Items';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    learnMoreLink: Schema.Attribute.String;
    learnMoreText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedGalleryItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_items';
  info: {
    displayName: 'Gallery Items';
  };
  attributes: {
    altText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageLink: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    displayName: 'Navigation Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStatsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats_cards';
  info: {
    displayName: 'Stats Card';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'home.hero': HomeHero;
      'sections.active-by-default': SectionsActiveByDefault;
      'sections.category': SectionsCategory;
      'sections.gallery-items': SectionsGalleryItems;
      'sections.leader-item': SectionsLeaderItem;
      'sections.leadership-thoughts': SectionsLeadershipThoughts;
      'sections.life-at-raymond-realty': SectionsLifeAtRaymondRealty;
      'sections.made-for-more': SectionsMadeForMore;
      'sections.our-values-section': SectionsOurValuesSection;
      'sections.stats-grid': SectionsStatsGrid;
      'sections.stats-section': SectionsStatsSection;
      'sections.tabs': SectionsTabs;
      'shared.button': SharedButton;
      'shared.cards': SharedCards;
      'shared.content-items': SharedContentItems;
      'shared.gallery-items': SharedGalleryItems;
      'shared.media': SharedMedia;
      'shared.navigation-item': SharedNavigationItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stats-card': SharedStatsCard;
    }
  }
}
