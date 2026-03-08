import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ACENji Help',
    description: 'Documentation for ACENji — the no-code platform for web and mobile apps',
    cleanUrls: true,
    ignoreDeadLinks: true,

    // Allow raw HTML in markdown (many legacy pages use <style>, <details>, <iframe> etc.)
    markdown: {
        html: true
    },

    vue: {
        template: {
            compilerOptions: {
                // Treat these as native HTML elements, not Vue components
                isCustomElement: (tag) => ['iframe', 'video', 'source'].includes(tag)
            }
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/images/info-icon.png' }]
    ],

    themeConfig: {
        logo: '/images/info-icon.png',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started/' },
            { text: 'Web App', link: '/create-web-application/' },
            { text: 'Mobile App', link: '/create-native-mobile-app/' },
            { text: 'ACENji.com', link: 'https://acenji.com' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                link: '/introduction/'
            },
            {
                text: 'Getting Started',
                link: '/getting-started/',
                collapsed: false,
                items: [
                    { text: 'What is ACENji', link: '/getting-started/what-is-acenji/' },
                    { text: 'Sign Up', link: '/getting-started/signup/' },
                    { text: 'Add Your Organization', link: '/getting-started/add-your-organization/' },
                    { text: 'User Roles', link: '/getting-started/user-roles/' },
                    { text: 'Add Users', link: '/getting-started/add-users/' },
                    { text: 'Manage Permission Levels', link: '/getting-started/managing-permission-levels/' },
                ]
            },
            {
                text: 'Create Web Application',
                link: '/create-web-application/',
                collapsed: false,
                items: [
                    {
                        text: 'Integrating Your App',
                        link: '/create-web-application/integrating-your-app/',
                        collapsed: true,
                        items: [
                            { text: 'WordPress', link: '/create-web-application/integrating-your-app/wordpress/' },
                            { text: 'HTML / JavaScript', link: '/create-web-application/integrating-your-app/html-javascript/' },
                        ]
                    },
                    {
                        text: 'Website Builder',
                        link: '/create-web-application/website-builder/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Floating Design Panel',
                                link: '/create-web-application/website-builder/floating-design-panel/',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Element Section',
                                        link: '/create-web-application/website-builder/floating-design-panel/element-section/',
                                        collapsed: true,
                                        items: [
                                            { text: 'General Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/general-tab/' },
                                            {
                                                text: 'Events Tab',
                                                link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/',
                                                collapsed: true,
                                                items: [
                                                    { text: 'Card Link', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/card-link/' },
                                                    { text: 'Open URL', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/open-url/' },
                                                    { text: 'Change Style', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/change-style/' },
                                                    { text: 'Calculate', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/calculate/' },
                                                    { text: 'Clone Tile', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/clone-tile/' },
                                                    { text: 'Delete Button', link: '/create-web-application/website-builder/floating-design-panel/element-section/events-tab/delete-button/' },
                                                ]
                                            },
                                            { text: 'Connect Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/connect-tab/' },
                                            { text: 'Color Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/color-tab/' },
                                            { text: 'Dimensions Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/dimensions-tab/' },
                                            { text: 'Position Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/position-tab/' },
                                            { text: 'Text Tab', link: '/create-web-application/website-builder/floating-design-panel/element-section/text-tab/' },
                                        ]
                                    },
                                    { text: 'Page Tiles Section', link: '/create-web-application/website-builder/floating-design-panel/page-tiles-section/' },
                                    { text: 'Databases Section', link: '/create-web-application/website-builder/floating-design-panel/databases-section/' },
                                    { text: 'Conditions Section', link: '/create-web-application/website-builder/floating-design-panel/conditions-section/' },
                                    { text: 'Styles Section', link: '/create-web-application/website-builder/floating-design-panel/styles-section/' },
                                ]
                            },
                            {
                                text: 'Tile Section',
                                link: '/create-web-application/website-builder/tile-section/',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Tile Templates',
                                        link: '/create-web-application/website-builder/tile-section/tile-templates/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Editing Tile Template', link: '/create-web-application/website-builder/tile-section/tile-templates/editing-tile-template/' },
                                        ]
                                    },
                                    {
                                        text: 'Tile Instances',
                                        link: '/create-web-application/website-builder/tile-section/tile-instances/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Editing Tile Instance', link: '/create-web-application/website-builder/tile-section/tile-instances/editing-tile-instance/' },
                                            { text: 'Clone Instance to Template', link: '/create-web-application/website-builder/tile-section/tile-instances/clone-tile-instance-into-tile-template/' },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'Page Section',
                                link: '/create-web-application/website-builder/page-section/',
                                collapsed: true,
                                items: [
                                    { text: 'Page Layout', link: '/create-web-application/website-builder/page-section/page-layout/' },
                                    { text: 'Managing Pages', link: '/create-web-application/website-builder/page-section/managing-pages/' },
                                ]
                            },
                            { text: 'Workflows & Variables', link: '/create-web-application/website-builder/workflows-and-variables/' },
                            { text: 'Roles & Permissions', link: '/create-web-application/website-builder/roles-and-permissions/' },
                            { text: 'Publish Section', link: '/create-web-application/website-builder/publish-section/' },
                        ]
                    },
                    {
                        text: 'Tutorials',
                        link: '/create-web-application/tutorials/',
                        collapsed: true,
                        items: [
                            { text: 'Creating Your First Web App', link: '/create-web-application/tutorials/create-your-first-web-app/' },
                            { text: 'Setting Up Pages', link: '/create-web-application/tutorials/setting-up-pages/' },
                            { text: 'Adding Workflows', link: '/create-web-application/tutorials/adding-workflows/' },
                            { text: 'Roles & Permissions', link: '/create-web-application/tutorials/roles-and-permissions/' },
                            { text: 'Publishing', link: '/create-web-application/tutorials/publishing/' },
                        ]
                    },
                    {
                        text: 'Web Elements',
                        link: '/create-web-application/elements/',
                        collapsed: true,
                        items: [
                            { text: 'Row Container', link: '/create-web-application/elements/row-container/' },
                            { text: 'Info', link: '/create-web-application/elements/info/' },
                            { text: 'Text Input', link: '/create-web-application/elements/text-input/' },
                            { text: 'Text Area', link: '/create-web-application/elements/text-area/' },
                            { text: 'Button', link: '/create-web-application/elements/button/' },
                            { text: 'Image', link: '/create-web-application/elements/image/' },
                            { text: 'Single Selection Group', link: '/create-web-application/elements/single-selection-group/' },
                            { text: 'Multiple Selection Group', link: '/create-web-application/elements/multiple-selection-group/' },
                            { text: 'Numeric Input', link: '/create-web-application/elements/numeric-input/' },
                            { text: 'Yes / No / Unknown', link: '/create-web-application/elements/yes-no-unknown/' },
                            { text: 'Checkbox', link: '/create-web-application/elements/checkbox/' },
                            { text: 'Phone Number', link: '/create-web-application/elements/phone-number/' },
                            { text: 'Date', link: '/create-web-application/elements/date/' },
                            { text: 'Video', link: '/create-web-application/elements/video/' },
                            { text: 'Link', link: '/create-web-application/elements/link/' },
                            { text: 'Card Link', link: '/create-web-application/elements/card-link/' },
                            { text: 'Slider', link: '/create-web-application/elements/slider/' },
                            { text: 'Rating', link: '/create-web-application/elements/rating/' },
                            { text: 'Increment / Decrement', link: '/create-web-application/elements/increment-decrement/' },
                            { text: 'Email', link: '/create-web-application/elements/email/' },
                            { text: 'User Info', link: '/create-web-application/elements/user-info/' },
                            { text: 'Rich Editor', link: '/create-web-application/elements/rich-editor/' },
                            { text: 'Dropdown', link: '/create-web-application/elements/dropdown/' },
                            { text: 'Card List', link: '/create-web-application/elements/card-list/' },
                            { text: 'Modal Form', link: '/create-web-application/elements/modal-form/' },
                            { text: 'Report Download', link: '/create-web-application/elements/report-download/' },
                            { text: 'CRUD Grid', link: '/create-web-application/elements/crud-grid/' },
                            { text: 'Tree Navigation', link: '/create-web-application/elements/tree-navigation/' },
                            { text: 'JSON Data Source', link: '/create-web-application/elements/json-data-source/' },
                            { text: 'Key-Value Table', link: '/create-web-application/elements/key-value-table/' },
                            { text: 'Badge', link: '/create-web-application/elements/badge/' },
                            { text: 'Breadcrumb', link: '/create-web-application/elements/breadcrumb/' },
                            { text: 'Card Grid', link: '/create-web-application/elements/card-grid/' },
                            { text: 'Search Modal', link: '/create-web-application/elements/search-modal/' },
                            { text: 'Tab Bar', link: '/create-web-application/elements/tab-bar/' },
                            { text: 'Video Gallery', link: '/create-web-application/elements/video-gallery/' },
                            { text: 'Stat Card', link: '/create-web-application/elements/stat-card/' },
                            { text: 'Sticky Header', link: '/create-web-application/elements/sticky-header/' },
                            { text: 'Offline Cache', link: '/create-web-application/elements/offline-cache/' },
                            { text: 'Sidebar Layout', link: '/create-web-application/elements/sidebar-layout/' },
                            { text: 'Bottom Sheet', link: '/create-web-application/elements/bottom-sheet/' },
                            { text: 'Proposal Form', link: '/create-web-application/elements/proposal-form/' },
                            { text: 'Approval Queue', link: '/create-web-application/elements/approval-queue/' },
                            { text: 'Bookmark List', link: '/create-web-application/elements/bookmark-list/' },
                            { text: 'Deep Link', link: '/create-web-application/elements/deep-link/' },
                            { text: '3D Viewer', link: '/create-web-application/elements/three-d-viewer/' },
                            { text: 'Comment Thread', link: '/create-web-application/elements/comment-thread/' },
                            { text: 'Activity Feed', link: '/create-web-application/elements/activity-feed/' },
                            { text: 'Markdown Renderer', link: '/create-web-application/elements/markdown-renderer/' },
                            { text: 'Icon', link: '/create-web-application/elements/icon/' },
                            { text: 'Shape', link: '/create-web-application/elements/shape/' },
                            { text: 'HTML Element', link: '/create-web-application/elements/html-element/' },
                            { text: 'Alert', link: '/create-web-application/elements/alert/' },
                            { text: 'File Uploader', link: '/create-web-application/elements/file-uploader/' },
                            { text: 'Multiselect Dropdown', link: '/create-web-application/elements/multiselect-dropdown/' },
                            { text: 'Map Element', link: '/create-web-application/elements/map-element/' },
                            { text: 'Toggle Switch', link: '/create-web-application/elements/toggle-switch/' },
                            { text: 'Progress Bar', link: '/create-web-application/elements/progress-bar/' },
                            { text: 'Audio Player', link: '/create-web-application/elements/audio-player/' },
                            { text: 'Color Picker', link: '/create-web-application/elements/color-picker/' },
                            { text: 'Pipe Content Renderer', link: '/create-web-application/elements/pipe-content-renderer/' },
                            { text: 'Reference List', link: '/create-web-application/elements/reference-list/' },
                            { text: 'Image Gallery', link: '/create-web-application/elements/image-gallery/' },
                            { text: 'Bar Chart', link: '/create-web-application/elements/bar-chart/' },
                            { text: 'Line Chart', link: '/create-web-application/elements/line-chart/' },
                            { text: 'Pie Chart', link: '/create-web-application/elements/pie-chart/' },
                            { text: 'Gauge Chart', link: '/create-web-application/elements/gauge-chart/' },
                            { text: 'Sparkline', link: '/create-web-application/elements/sparkline-chart/' },
                            { text: 'Heatmap', link: '/create-web-application/elements/heatmap-chart/' },
                            { text: 'Funnel Chart', link: '/create-web-application/elements/funnel-chart/' },
                            { text: 'Directions', link: '/create-web-application/elements/directions/' },
                            { text: 'Store Locator', link: '/create-web-application/elements/store-locator/' },
                            { text: 'Geofencing', link: '/create-web-application/elements/geofencing/' },
                            { text: 'Address Picker', link: '/create-web-application/elements/address-picker/' },
                            { text: 'Calendar View', link: '/create-web-application/elements/calendar-view/' },
                            { text: 'Event Card', link: '/create-web-application/elements/event-card/' },
                            { text: 'Booking', link: '/create-web-application/elements/booking/' },
                            { text: 'Timeline', link: '/create-web-application/elements/timeline/' },
                            { text: 'Testimonial', link: '/create-web-application/elements/testimonial/' },
                            { text: 'FAQ Accordion', link: '/create-web-application/elements/faq-accordion/' },
                            { text: 'Pricing Table', link: '/create-web-application/elements/pricing-table/' },
                            { text: 'Feature Grid', link: '/create-web-application/elements/feature-grid/' },
                            { text: 'Team Card', link: '/create-web-application/elements/team-card/' },
                            { text: 'Hero Banner', link: '/create-web-application/elements/hero-banner/' },
                            { text: 'Pagination', link: '/create-web-application/elements/pagination/' },
                            { text: 'Stepper', link: '/create-web-application/elements/stepper/' },
                            { text: 'Mega Menu', link: '/create-web-application/elements/mega-menu/' },
                            { text: 'Command Palette', link: '/create-web-application/elements/command-palette/' },
                            { text: 'Product Card', link: '/create-web-application/elements/product-card/' },
                            { text: 'Cart', link: '/create-web-application/elements/cart/' },
                            { text: 'Checkout', link: '/create-web-application/elements/checkout/' },
                            { text: 'Coupon', link: '/create-web-application/elements/coupon/' },
                            { text: 'Invoice', link: '/create-web-application/elements/invoice/' },
                            { text: 'Email Composer', link: '/create-web-application/elements/email-composer/' },
                            { text: 'SMS Composer', link: '/create-web-application/elements/sms-composer/' },
                            { text: 'Push Notification', link: '/create-web-application/elements/push-notification/' },
                            { text: 'Contact Form', link: '/create-web-application/elements/contact-form/' },
                            { text: 'Profile Card', link: '/create-web-application/elements/profile-card/' },
                            { text: 'Avatar', link: '/create-web-application/elements/avatar/' },
                            { text: 'PDF Viewer', link: '/create-web-application/elements/pdf-viewer/' },
                            { text: 'Doc Viewer', link: '/create-web-application/elements/doc-viewer/' },
                            { text: 'File Manager', link: '/create-web-application/elements/file-manager/' },
                            { text: 'Share Buttons', link: '/create-web-application/elements/share-buttons/' },
                            { text: 'Reactions', link: '/create-web-application/elements/reactions/' },
                            { text: 'Social Feed', link: '/create-web-application/elements/social-feed/' },
                            { text: 'Follow Button', link: '/create-web-application/elements/follow-button/' },
                        ]
                    },
                ]
            },
            {
                text: 'Create Native Mobile App',
                link: '/create-native-mobile-app/',
                collapsed: true,
                items: [
                    { text: 'Mini Apps', link: '/create-native-mobile-app/mini-apps/' },
                    {
                        text: 'Tutorials',
                        link: '/create-native-mobile-app/tutorials/',
                        collapsed: true,
                        items: [
                            { text: 'Creating Your First Mobile App', link: '/create-native-mobile-app/tutorials/creating-your-first-mobile-app/' },
                            { text: 'Pages & Navigation', link: '/create-native-mobile-app/tutorials/pages-and-navigation/' },
                            { text: 'Workflows & Variables', link: '/create-native-mobile-app/tutorials/workflow-and-variables/' },
                            { text: 'Roles & Permissions', link: '/create-native-mobile-app/tutorials/roles-and-permissions/' },
                            { text: 'Publishing to Stores', link: '/create-native-mobile-app/tutorials/publishing-to-stores/' },
                        ]
                    },
                    {
                        text: 'Mobile Elements',
                        link: '/create-native-mobile-app/elements/',
                        collapsed: true,
                        items: [
                            { text: 'Info', link: '/create-native-mobile-app/elements/info/' },
                            { text: 'Text Input', link: '/create-native-mobile-app/elements/text-input/' },
                            { text: 'Button', link: '/create-native-mobile-app/elements/button/' },
                            { text: 'Image', link: '/create-native-mobile-app/elements/img/' },
                            { text: 'Phone Number', link: '/create-native-mobile-app/elements/phonenumber/' },
                            { text: 'Date', link: '/create-native-mobile-app/elements/date/' },
                            { text: 'Camera', link: '/create-native-mobile-app/elements/camera/' },
                            { text: 'GPS', link: '/create-native-mobile-app/elements/gps/' },
                            { text: 'Signature', link: '/create-native-mobile-app/elements/signature/' },
                            { text: 'Slider', link: '/create-native-mobile-app/elements/slider/' },
                            { text: 'Rating', link: '/create-native-mobile-app/elements/rating/' },
                            { text: 'Dropdown', link: '/create-native-mobile-app/elements/dropdown/' },
                            { text: 'Card List', link: '/create-native-mobile-app/elements/card-list/' },
                            { text: 'Modal Form', link: '/create-native-mobile-app/elements/modal-form/' },
                            { text: 'Pinned Panel', link: '/create-native-mobile-app/elements/pinned-panel/' },
                            { text: 'Price Table', link: '/create-native-mobile-app/elements/price-table/' },
                            { text: 'Report Download', link: '/create-native-mobile-app/elements/report-download/' },
                        ]
                    },
                ]
            },
            {
                text: 'Shared Concepts',
                link: '/shared-concepts/',
                collapsed: true,
                items: [
                    {
                        text: 'Conditional Logic',
                        link: '/shared-concepts/conditional-logic/',
                        collapsed: true,
                        items: [
                            { text: 'Quick Start', link: '/shared-concepts/conditional-logic/quick-start/' },
                            { text: 'Selection Statements', link: '/shared-concepts/conditional-logic/selection-statement/' },
                        ]
                    },
                    {
                        text: 'Variable Center',
                        link: '/shared-concepts/variable-center/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Settings',
                                link: '/shared-concepts/variable-center/settings/',
                                collapsed: true,
                                items: [
                                    { text: 'Global Variables', link: '/shared-concepts/variable-center/settings/global-variables/' },
                                    {
                                        text: 'Group Session',
                                        link: '/shared-concepts/variable-center/settings/group-session/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Statuses', link: '/shared-concepts/variable-center/settings/group-session/group-session-statuses/' },
                                            { text: 'Variables', link: '/shared-concepts/variable-center/settings/group-session/group-session-variables/' },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'User Data',
                                link: '/shared-concepts/variable-center/user-data/',
                                collapsed: true,
                                items: [
                                    { text: 'Connect to Gate Controller', link: '/shared-concepts/variable-center/user-data/connect-to-gate-controller/' },
                                    { text: 'User Data Variables', link: '/shared-concepts/variable-center/user-data/user-data-variables/' },
                                    { text: 'Add Users to Group Session', link: '/shared-concepts/variable-center/user-data/add-users-to-a-group-session/' },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Gate Controller',
                        link: '/shared-concepts/gate-controller/',
                        collapsed: true,
                        items: [
                            { text: 'Setup Global Variables', link: '/shared-concepts/gate-controller/setup-global-variables/' },
                            {
                                text: 'Add a Gate',
                                link: '/shared-concepts/gate-controller/add-a-gate/',
                                collapsed: true,
                                items: [
                                    { text: 'Select Target', link: '/shared-concepts/gate-controller/add-a-gate/select-target/' },
                                    { text: 'Set Time Lock', link: '/shared-concepts/gate-controller/add-a-gate/set-time-lock/' },
                                    { text: 'Set Variable Lock', link: '/shared-concepts/gate-controller/add-a-gate/set-variable-lock/' },
                                    { text: 'Set Precondition Lock', link: '/shared-concepts/gate-controller/add-a-gate/set-precondition-lock/' },
                                    { text: 'Set Display Element', link: '/shared-concepts/gate-controller/add-a-gate/set-display-element/' },
                                ]
                            },
                        ]
                    },
                    { text: 'Roles & Permissions', link: '/shared-concepts/roles-and-permissions/' },
                ]
            },
            { text: 'Partnerships', link: '/partnerships/' },
            { text: 'FAQs', link: '/FAQs/' },
            { text: 'For Developers', link: '/for-developers/' },
            { text: 'Compliance', link: '/compliance/' },
            { text: 'About', link: '/about/' },
            { text: 'Contact', link: '/contact/' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/acenji' }
        ],

        footer: {
            message: 'No-Code App Builder',
            copyright: 'Copyright © 2026 ACENji'
        },

        search: {
            provider: 'local'
        },

        editLink: {
            pattern: 'https://github.com/acenji/acenji-help/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
})
