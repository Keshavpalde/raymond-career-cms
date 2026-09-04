import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_button_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

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

export interface SectionsActivities extends Struct.ComponentSchema {
  collectionName: 'components_sections_activities';
  info: {
    displayName: 'Activities';
  };
  attributes: {
    activitiesSlides: Schema.Attribute.Component<
      'sections.activities-slides',
      true
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsActivitiesSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_activities_slides';
  info: {
    displayName: 'Activities Slides';
  };
  attributes: {
    activitySlide: Schema.Attribute.Component<'sections.activity-slide', false>;
  };
}

export interface SectionsActivitySlide extends Struct.ComponentSchema {
  collectionName: 'components_sections_activity_slides';
  info: {
    displayName: 'Activity Slide';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsApplyNowHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_apply_now_heroes';
  info: {
    displayName: 'Apply Now Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsAwardYears extends Struct.ComponentSchema {
  collectionName: 'components_sections_award_years';
  info: {
    displayName: 'Award Years';
  };
  attributes: {
    awardYear: Schema.Attribute.Component<'shared.award-year', false>;
  };
}

export interface SectionsAwards extends Struct.ComponentSchema {
  collectionName: 'components_sections_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    awardDescription: Schema.Attribute.Blocks;
    awardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    awardTitle: Schema.Attribute.String;
    displayOrder: Schema.Attribute.Integer;
  };
}

export interface SectionsAwardsAndRecognition extends Struct.ComponentSchema {
  collectionName: 'components_sections_awards_and_recognitions';
  info: {
    displayName: 'Awards And Recognition';
  };
  attributes: {
    awardsYear: Schema.Attribute.Component<'shared.awards-year', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsBeyondWork extends Struct.ComponentSchema {
  collectionName: 'components_sections_beyond_works';
  info: {
    displayName: 'Beyond Work';
  };
  attributes: {
    beyondWorkSlides: Schema.Attribute.Component<
      'sections.beyond-work-slides',
      true
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsBeyondWorkSlideNew extends Struct.ComponentSchema {
  collectionName: 'components_sections_beyond_work_slide_news';
  info: {
    displayName: 'Beyond Work Slide New';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBeyondWorkSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_beyond_work_slides';
  info: {
    displayName: 'beyondWorkSlides';
  };
  attributes: {
    beyondWorkSlideNew: Schema.Attribute.Component<
      'sections.beyond-work-slide-new',
      false
    >;
  };
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

export interface SectionsDiversityAndInclusionHero
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_diversity_and_inclusion_heroes';
  info: {
    displayName: 'Diversity & Inclusion Hero';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsDiversityInAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_diversity_in_actions';
  info: {
    displayName: 'Diversity In Action';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    initiatives: Schema.Attribute.Component<'sections.initiatives', true>;
  };
}

export interface SectionsDiversityStatistics extends Struct.ComponentSchema {
  collectionName: 'components_sections_diversity_statistics';
  info: {
    displayName: 'Diversity Statistics';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'sections.statistics', true>;
  };
}

export interface SectionsEmployeeStories extends Struct.ComponentSchema {
  collectionName: 'components_sections_employee_stories';
  info: {
    displayName: 'Employee Stories';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'sections.stories', true>;
  };
}

export interface SectionsEmployeeStoriesHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_employee_stories_heroes';
  info: {
    displayName: 'Employee Stories Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsEmployeeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_employee_testimonials';
  info: {
    displayName: 'Employee Testimonials';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'sections.testimonials', true>;
  };
}

export interface SectionsFindYourOpportunity extends Struct.ComponentSchema {
  collectionName: 'components_sections_find_your_opportunities';
  info: {
    displayName: 'Find Your Opportunity';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsGalleryItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_items';
  info: {
    displayName: 'Gallery Items';
  };
  attributes: {};
}

export interface SectionsGlimpseIntoOurWorld extends Struct.ComponentSchema {
  collectionName: 'components_sections_glimpse_into_our_worlds';
  info: {
    displayName: 'Glimpse Into Our World';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    glimpseItem: Schema.Attribute.Component<'sections.glimpse-item', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsGlimpseItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_glimpse_items';
  info: {
    displayName: 'Glimpse Item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    galleryImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGrowthEnvironment extends Struct.ComponentSchema {
  collectionName: 'components_sections_growth_environments';
  info: {
    displayName: 'Growth Environment';
  };
  attributes: {
    growthItems: Schema.Attribute.Component<'sections.growth-items', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.String;
    quoteBy: Schema.Attribute.String;
  };
}

export interface SectionsGrowthItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_growth_items';
  info: {
    displayName: 'growthItems';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHomeJobOpportunities extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_job_opportunities';
  info: {
    displayName: 'Home Job Opportunities';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHouseConcept extends Struct.ComponentSchema {
  collectionName: 'components_sections_house_concepts';
  info: {
    displayName: 'House Concept';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsHouseConceptPage extends Struct.ComponentSchema {
  collectionName: 'components_sections_house_concept_pages';
  info: {
    displayName: 'House Concept Page';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overlay: Schema.Attribute.Boolean;
  };
}

export interface SectionsHouses extends Struct.ComponentSchema {
  collectionName: 'components_sections_houses';
  info: {
    displayName: 'houses';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SectionsImages extends Struct.ComponentSchema {
  collectionName: 'components_sections_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    learnAndGrowImage: Schema.Attribute.Component<
      'sections.recognition-image',
      false
    >;
  };
}

export interface SectionsInitiatives extends Struct.ComponentSchema {
  collectionName: 'components_sections_initiatives';
  info: {
    displayName: 'initiatives';
  };
  attributes: {
    hoverText: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsInsideOurWorkplace extends Struct.ComponentSchema {
  collectionName: 'components_sections_inside_our_workplaces';
  info: {
    displayName: 'Inside Our Workplace';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    workplaceItems: Schema.Attribute.Component<
      'sections.workplace-items',
      true
    >;
  };
}

export interface SectionsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_items';
  info: {
    displayName: 'items';
  };
  attributes: {};
}

export interface SectionsJoinOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_join_our_teams';
  info: {
    displayName: 'Join Our Team';
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

export interface SectionsLearnAndGrow extends Struct.ComponentSchema {
  collectionName: 'components_sections_learn_and_grows';
  info: {
    displayName: 'Learn & Grow';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    learnAndGrowTabs: Schema.Attribute.Component<'sections.new-tabs', true>;
  };
}

export interface SectionsLearnAndGrowItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_learn_and_grow_items';
  info: {
    displayName: 'Learn & Grow Item';
  };
  attributes: {};
}

export interface SectionsLifeAtRaymondHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_life_at_raymond_heroes';
  info: {
    displayName: 'Life At Raymond Hero';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
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

export interface SectionsLifeBeyondItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_life_beyond_items';
  info: {
    displayName: 'lifeBeyondItems';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLifeBeyondJobTitle extends Struct.ComponentSchema {
  collectionName: 'components_sections_life_beyond_job_titles';
  info: {
    displayName: 'Life Beyond Job Title';
  };
  attributes: {
    heading: Schema.Attribute.String;
    lifeBeyondItems: Schema.Attribute.Component<
      'sections.life-beyond-items',
      true
    >;
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

export interface SectionsMadeForMoreIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_made_for_more_intros';
  info: {
    displayName: 'Made For More Intro';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsMeetTheHouses extends Struct.ComponentSchema {
  collectionName: 'components_sections_meet_the_houses';
  info: {
    displayName: 'Meet The Houses';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    houses: Schema.Attribute.Component<'sections.houses', true>;
  };
}

export interface SectionsNewTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_new_tabs';
  info: {
    displayName: 'New Tabs';
  };
  attributes: {
    learnAndGrowTabs: Schema.Attribute.Component<
      'sections.recognition-tab',
      false
    >;
  };
}

export interface SectionsOurCommitmentToInclusion
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_commitment_to_inclusions';
  info: {
    displayName: 'Our Commitment To Inclusion';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    principles: Schema.Attribute.Component<'sections.principles', true>;
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

export interface SectionsOurWorkplaceCulture extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_workplace_cultures';
  info: {
    displayName: 'Our Workplace Culture';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    slides: Schema.Attribute.Component<'sections.slides', true>;
  };
}

export interface SectionsPoints extends Struct.ComponentSchema {
  collectionName: 'components_sections_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsPrinciples extends Struct.ComponentSchema {
  collectionName: 'components_sections_principles';
  info: {
    displayName: 'Principles';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRecognition extends Struct.ComponentSchema {
  collectionName: 'components_sections_recognitions';
  info: {
    displayName: 'Recognition';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    recognitionItems: Schema.Attribute.Component<
      'sections.recognition-items',
      true
    >;
  };
}

export interface SectionsRecognitionImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_recognition_images';
  info: {
    displayName: 'Recognition Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsRecognitionItemNew extends Struct.ComponentSchema {
  collectionName: 'components_sections_recognition_item_news';
  info: {
    displayName: 'Recognition Item New';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRecognitionItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_recognition_items';
  info: {
    displayName: 'Recognition Items';
  };
  attributes: {
    recognitionItemNew: Schema.Attribute.Component<
      'sections.recognition-item-new',
      false
    >;
  };
}

export interface SectionsRecognitionTab extends Struct.ComponentSchema {
  collectionName: 'components_sections_recognition_tabs';
  info: {
    displayName: 'Recognition Tab';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'sections.images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mediaType: Schema.Attribute.Enumeration<['image', 'video']>;
  };
}

export interface SectionsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    displayOrder: Schema.Attribute.Integer;
    newTab: Schema.Attribute.Boolean;
    platform: Schema.Attribute.Enumeration<
      ['Instagram', 'Facebook', 'YouTube', 'X', 'LinkedIn']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SectionsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
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

export interface SectionsStories extends Struct.ComponentSchema {
  collectionName: 'components_sections_stories';
  info: {
    displayName: 'stories';
  };
  attributes: {
    designation: Schema.Attribute.String;
    employeeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsStoriesThatInspire extends Struct.ComponentSchema {
  collectionName: 'components_sections_stories_that_inspires';
  info: {
    displayName: 'Stories That Inspire';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    storyItems: Schema.Attribute.Component<'sections.story-items', true>;
  };
}

export interface SectionsStoryItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_items';
  info: {
    displayName: 'Story Items';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
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

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    activeByDefault: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    designation: Schema.Attribute.String;
    displayOrder: Schema.Attribute.Integer;
    employeeName: Schema.Attribute.String;
    employeePhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    quote: Schema.Attribute.Blocks;
    thumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    uploadedVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    videoType: Schema.Attribute.Enumeration<['youtubeURL', 'uploadVideo']>;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface SectionsWellbeingFirst extends Struct.ComponentSchema {
  collectionName: 'components_sections_wellbeing_firsts';
  info: {
    displayName: 'Wellbeing First';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    wellbeingSlides: Schema.Attribute.Component<
      'sections.wellbeing-slides',
      true
    >;
  };
}

export interface SectionsWellbeingSlideNew extends Struct.ComponentSchema {
  collectionName: 'components_sections_wellbeing_slide_news';
  info: {
    displayName: 'Wellbeing Slide New';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWellbeingSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_wellbeing_slides';
  info: {
    displayName: 'Wellbeing Slides';
  };
  attributes: {
    wellbeingSlide: Schema.Attribute.Component<
      'sections.wellbeing-slide-new',
      false
    >;
  };
}

export interface SectionsWomenBrigade extends Struct.ComponentSchema {
  collectionName: 'components_sections_women_brigades';
  info: {
    displayName: 'Women Brigade';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    Gif: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'sections.points', true>;
  };
}

export interface SectionsWorkplaceItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_workplace_items';
  info: {
    displayName: 'Workplace Items';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAwardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_award_items';
  info: {
    displayName: 'Award Item';
  };
  attributes: {
    awardDescription: Schema.Attribute.Blocks;
    awardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    awardTitle: Schema.Attribute.String;
    displayOrder: Schema.Attribute.Integer;
  };
}

export interface SharedAwardYear extends Struct.ComponentSchema {
  collectionName: 'components_shared_award_years';
  info: {
    displayName: 'Award Year';
  };
  attributes: {
    activeByDefault: Schema.Attribute.Boolean;
    awards: Schema.Attribute.Component<'sections.awards', true>;
    year: Schema.Attribute.Integer;
  };
}

export interface SharedAwardsYear extends Struct.ComponentSchema {
  collectionName: 'components_shared_awards_years';
  info: {
    displayName: 'Awards Year';
  };
  attributes: {
    activeByDefault: Schema.Attribute.Boolean;
    awards: Schema.Attribute.Component<'sections.awards', true>;
    year: Schema.Attribute.Integer;
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

export interface SharedCelebrations extends Struct.ComponentSchema {
  collectionName: 'components_shared_celebrations';
  info: {
    displayName: 'Celebrations';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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

export interface SharedEmployeeTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_employee_testimonial_items';
  info: {
    displayName: 'Employee Testimonial Item';
  };
  attributes: {
    activeByDefault: Schema.Attribute.Boolean;
    designation: Schema.Attribute.String;
    displayOrder: Schema.Attribute.Integer;
    employeeName: Schema.Attribute.String;
    employeePhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    quote: Schema.Attribute.Blocks;
    thumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    uploadedVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    videoType: Schema.Attribute.Enumeration<['youtube', 'uploaded']>;
    youtubeUrl: Schema.Attribute.String;
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

export interface SharedHouseMoments extends Struct.ComponentSchema {
  collectionName: 'components_shared_house_moments';
  info: {
    displayName: 'House Moments';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    moments: Schema.Attribute.Component<'shared.moments', true>;
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

export interface SharedMoments extends Struct.ComponentSchema {
  collectionName: 'components_shared_moments';
  info: {
    displayName: 'Moments';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    column: Schema.Attribute.Enumeration<['Left', 'Right']>;
    displayOrder: Schema.Attribute.Integer;
    openInNewTab: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
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
      'button.cta-button': ButtonCtaButton;
      'home.hero': HomeHero;
      'sections.active-by-default': SectionsActiveByDefault;
      'sections.activities': SectionsActivities;
      'sections.activities-slides': SectionsActivitiesSlides;
      'sections.activity-slide': SectionsActivitySlide;
      'sections.apply-now-hero': SectionsApplyNowHero;
      'sections.award-years': SectionsAwardYears;
      'sections.awards': SectionsAwards;
      'sections.awards-and-recognition': SectionsAwardsAndRecognition;
      'sections.beyond-work': SectionsBeyondWork;
      'sections.beyond-work-slide-new': SectionsBeyondWorkSlideNew;
      'sections.beyond-work-slides': SectionsBeyondWorkSlides;
      'sections.category': SectionsCategory;
      'sections.diversity-and-inclusion-hero': SectionsDiversityAndInclusionHero;
      'sections.diversity-in-action': SectionsDiversityInAction;
      'sections.diversity-statistics': SectionsDiversityStatistics;
      'sections.employee-stories': SectionsEmployeeStories;
      'sections.employee-stories-hero': SectionsEmployeeStoriesHero;
      'sections.employee-testimonials': SectionsEmployeeTestimonials;
      'sections.find-your-opportunity': SectionsFindYourOpportunity;
      'sections.gallery-items': SectionsGalleryItems;
      'sections.glimpse-into-our-world': SectionsGlimpseIntoOurWorld;
      'sections.glimpse-item': SectionsGlimpseItem;
      'sections.growth-environment': SectionsGrowthEnvironment;
      'sections.growth-items': SectionsGrowthItems;
      'sections.hero': SectionsHero;
      'sections.home-job-opportunities': SectionsHomeJobOpportunities;
      'sections.house-concept': SectionsHouseConcept;
      'sections.house-concept-page': SectionsHouseConceptPage;
      'sections.houses': SectionsHouses;
      'sections.images': SectionsImages;
      'sections.initiatives': SectionsInitiatives;
      'sections.inside-our-workplace': SectionsInsideOurWorkplace;
      'sections.items': SectionsItems;
      'sections.join-our-team': SectionsJoinOurTeam;
      'sections.leader-item': SectionsLeaderItem;
      'sections.leadership-thoughts': SectionsLeadershipThoughts;
      'sections.learn-and-grow': SectionsLearnAndGrow;
      'sections.learn-and-grow-item': SectionsLearnAndGrowItem;
      'sections.life-at-raymond-hero': SectionsLifeAtRaymondHero;
      'sections.life-at-raymond-realty': SectionsLifeAtRaymondRealty;
      'sections.life-beyond-items': SectionsLifeBeyondItems;
      'sections.life-beyond-job-title': SectionsLifeBeyondJobTitle;
      'sections.made-for-more': SectionsMadeForMore;
      'sections.made-for-more-intro': SectionsMadeForMoreIntro;
      'sections.meet-the-houses': SectionsMeetTheHouses;
      'sections.new-tabs': SectionsNewTabs;
      'sections.our-commitment-to-inclusion': SectionsOurCommitmentToInclusion;
      'sections.our-values-section': SectionsOurValuesSection;
      'sections.our-workplace-culture': SectionsOurWorkplaceCulture;
      'sections.points': SectionsPoints;
      'sections.principles': SectionsPrinciples;
      'sections.recognition': SectionsRecognition;
      'sections.recognition-image': SectionsRecognitionImage;
      'sections.recognition-item-new': SectionsRecognitionItemNew;
      'sections.recognition-items': SectionsRecognitionItems;
      'sections.recognition-tab': SectionsRecognitionTab;
      'sections.slides': SectionsSlides;
      'sections.social-links': SectionsSocialLinks;
      'sections.statistics': SectionsStatistics;
      'sections.stats-grid': SectionsStatsGrid;
      'sections.stats-section': SectionsStatsSection;
      'sections.stories': SectionsStories;
      'sections.stories-that-inspire': SectionsStoriesThatInspire;
      'sections.story-items': SectionsStoryItems;
      'sections.tabs': SectionsTabs;
      'sections.testimonials': SectionsTestimonials;
      'sections.wellbeing-first': SectionsWellbeingFirst;
      'sections.wellbeing-slide-new': SectionsWellbeingSlideNew;
      'sections.wellbeing-slides': SectionsWellbeingSlides;
      'sections.women-brigade': SectionsWomenBrigade;
      'sections.workplace-items': SectionsWorkplaceItems;
      'shared.award-item': SharedAwardItem;
      'shared.award-year': SharedAwardYear;
      'shared.awards-year': SharedAwardsYear;
      'shared.button': SharedButton;
      'shared.cards': SharedCards;
      'shared.celebrations': SharedCelebrations;
      'shared.content-items': SharedContentItems;
      'shared.employee-testimonial-item': SharedEmployeeTestimonialItem;
      'shared.gallery-items': SharedGalleryItems;
      'shared.house-moments': SharedHouseMoments;
      'shared.media': SharedMedia;
      'shared.moments': SharedMoments;
      'shared.navigation-item': SharedNavigationItem;
      'shared.navigation-link': SharedNavigationLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stats-card': SharedStatsCard;
    }
  }
}
