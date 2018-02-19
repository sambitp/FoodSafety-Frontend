import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'Corporate Dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-home',
        children: [
          {
            state: 'Plant Dashboard',
            name: 'Plant Dashboard'
          },
          {
            state: 'My Dashboard',
            name: 'My Dashboard'
          },
          {
            state: 'Summary',
            name: 'Summary',
            // badge: [
            //   {
            //     type: 'info',
            //     value: 'NEW'
            //   }
            // ]
          }
        ]
      },
      // {
      //   state: 'navigation',
      //   short_label: 'N',
      //   name: 'Navigation',
      //   type: 'link',
      //   icon: 'icon-layout-cta-right'
      // },
      // {
      //   state: 'widget',
      //   short_label: 'W',
      //   name: 'Widget',
      //   type: 'sub',
      //   icon: 'icon-view-grid',
      //   badge: [
      //     {
      //       type: 'danger',
      //       value: '100+'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'statistic',
      //       name: 'Statistic'
      //     },
      //     {
      //       state: 'data',
      //       name: 'Data'
      //     },
      //     {
      //       state: 'chart',
      //       name: 'Chart'
      //     }
      //   ]
      // }
    ],
  },
  {
    label: '',
    main: [
      {
        state: 'basic',
        short_label: 'B',
        name: 'GFSC',
        type: 'sub',
        icon: 'icon-layout-grid2-alt',
        // children: [
        //   {
        //     state: 'alert',
        //     name: 'Alert'
        //   },
        //   {
        //     state: 'breadcrumb',
        //     name: 'Breadcrumbs'
        //   },
        //   {
        //     state: 'button',
        //     name: 'Button'
        //   },
        //   {
        //     state: 'box-shadow',
        //     name: 'Box-Shadow'
        //   },
        //   {
        //     state: 'accordion',
        //     name: 'Accordion'
        //   },
        //   {
        //     state: 'generic-class',
        //     name: 'Generic Class'
        //   },
        //   {
        //     state: 'tabs',
        //     name: 'Tabs'
        //   },
        //   {
        //     state: 'color',
        //     name: 'Color'
        //   },
        //   {
        //     state: 'label-badge',
        //     name: 'Label Badge'
        //   },
        //   {
        //     state: 'progressbar',
        //     name: 'Progressbar'
        //   },
        //   {
        //     state: 'pre-loader',
        //     name: 'Pre-Loader'
        //   },
        //   {
        //     state: 'list',
        //     name: 'List'
        //   },
        //   {
        //     state: 'tooltip',
        //     name: 'Tooltip & Popover'
        //   },
        //   {
        //     state: 'typography',
        //     name: 'Typography'
        //   },
        //   {
        //     state: 'other',
        //     name: 'Other'
        //   },
        // ]
      // },
      // {
      //   state: 'advance',
      //   short_label: 'A',
      //   name: 'Advance',
      //   type: 'sub',
      //   icon: 'icon-crown',
      //   children: [
      //     {
      //       state: 'modal',
      //       name: 'Modal'
      //     },
      //     {
      //       state: 'notifications',
      //       name: 'Notifications'
      //     },
      //     {
      //       state: 'notify',
      //       name: 'PNOTIFY',
      //       badge: [
      //         {
      //           type: 'info',
      //           value: 'New'
      //         }
      //       ]
      //     },
      //     {
      //       state: 'rating',
      //       name: 'Rating'
      //     },
      //     {
      //       state: 'slider',
      //       name: 'Slider'
      //     }
      //   ]
      // },
      // {
      //   state: 'animations',
      //   short_label: 'A',
      //   name: 'Animations',
      //   type: 'link',
      //   icon: 'icon-reload rotate-refresh'
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'HACCP',
        short_label: 'F',
        name: 'HACCP',
        type: 'sub',
        icon: 'icon-layers',
        // children: [
        //   {
        //     state: 'basic',
        //     name: 'Components'
        //   }, {
        //     state: 'add-on',
        //     name: 'Add-On'
        //   }, {
        //     state: 'advance',
        //     name: 'Advance'
        //   }, {
        //     state: 'validation',
        //     name: 'Validation'
        //   }
        // ]
      // },
      // {
      //   state: 'picker',
      //   short_label: 'P',
      //   main_state: 'forms',
      //   name: 'Form Picker',
      //   type: 'link',
      //   icon: 'icon-pencil-alt',
      //   badge: [
      //     {
      //       type: 'warning',
      //       value: 'New'
      //     }
      //   ]
      // },
      // {
      //   state: 'select',
      //   short_label: 'S',
      //   main_state: 'forms',
      //   name: 'Form Select',
      //   type: 'link',
      //   icon: 'icon-shortcode'
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Regulatory',
        short_label: 'B',
        name: 'Regulatory',
        type: 'sub',
        icon: 'icon-receipt',
        // children: [
        //   {
        //     state: 'basic',
        //     name: 'Basic Table'
        //   }, {
        //     state: 'sizing',
        //     name: 'Sizing Table'
        //   }, {
        //     state: 'border',
        //     name: 'Border Table'
        //   }, {
        //     state: 'styling',
        //     name: 'Styling Table'
        //   }
        // ]
      },
      // {
      //   state: 'data-table',
      //   short_label: 'D',
      //   name: 'Data Table',
      //   type: 'sub',
      //   icon: 'icon-widgetized',
      //   children: [
      //     {
      //       state: 'basic',
      //       name: 'Basic Table'
      //     }, {
      //       state: 'editable',
      //       name: 'Editable'
      //     }, {
      //       state: 'row-details',
      //       name: 'Row Details Table'
      //     }, {
      //       state: 'paging',
      //       name: 'Paging Table'
      //     }, {
      //       state: 'selection',
      //       name: 'Selection Table'
      //     }
      //   ]
      // }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Prerequisite Program',
        short_label: 'C',
        name: 'Prerequisite Program',
        type: 'sub',
        icon: 'icon-bar-chart-alt',
        children: [
          {
            state: 'EMP',
            name: 'EMP'
          }, 
          // {
          //   state: 'chart-js',
          //   name: 'ChartJS'
          // }, {
          //   state: 'radial',
          //   name: 'Radial'
          // }, 
          // {
          //   state: 'c3-js',
          //   name: 'C3 JS'
          // }
        ]
      },
      // {
      //   state: 'map',
      //   short_label: 'M',
      //   name: 'Maps',
      //   type: 'sub',
      //   icon: 'icon-map-alt',
      //   children: [
      //     {
      //       state: 'google',
      //       name: 'Google'
      //     }
      //   ]
      // },
      /*{
        state: 'landing',
        short_label: 'L',
        external: 'http://html.codedthemes.com/gradient-able-5/default/landingpage',
        name: 'Landing Page',
        type: 'external',
        icon: 'icon-mobile',
        target: true
      }*/
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Operating Procedures',
        short_label: 'A',
        name: 'Operating Procedures',
        type: 'sub',
        icon: 'icon-id-badge',
        // children: [
        //   {
        //     state: 'login',
        //     type: 'sub',
        //     name: 'Login Pages',
        //     children: [
        //       {
        //         state: 'simple',
        //         name: 'Simple',
        //         target: true
        //       }, {
        //         state: 'header-footer',
        //         name: 'Header & Footer',
        //         target: true
        //       }, {
        //         state: 'social',
        //         name: 'Social Icon',
        //         target: true
        //       }, {
        //         state: 'social-header-footer',
        //         name: 'Social Header & Footer',
        //         target: true
        //       }
        //     ]
        //   }, {
        //     state: 'registration',
        //     type: 'sub',
        //     name: 'Registration Pages',
        //     children: [
        //       {
        //         state: 'simple',
        //         name: 'Simple',
        //         target: true
        //       }, {
        //         state: 'header-footer',
        //         name: 'Header & Footer',
        //         target: true
        //       }, {
        //         state: 'social',
        //         name: 'Social',
        //         target: true
        //       }, {
        //         state: 'social-header-footer',
        //         name: 'Social Header & Footer',
        //         target: true
        //       }
        //     ]
        //   },
        //   {
        //     state: 'forgot',
        //     name: 'Forgot Password',
        //     target: true
        //   },
        //   {
        //     state: 'lock-screen',
        //     name: 'Lock Screen',
        //     target: true
        //   },
        // ]
      },
      // {
      //   state: 'maintenance',
      //   short_label: 'A',
      //   name: 'Maintenance',
      //   type: 'sub',
      //   icon: 'icon-settings',
      //   children: [
      //     {
      //       state: 'error',
      //       name: 'Error'
      //     },
      //     {
      //       state: 'coming-soon',
      //       name: 'Coming Soon'
      //     },
      //     {
      //       state: 'offline-ui',
      //       name: 'Offline UI',
      //       target: true
      //     }
      //   ]
      // },
      // {
      //   state: 'user',
      //   short_label: 'U',
      //   name: 'User Profile',
      //   type: 'sub',
      //   icon: 'icon-user',
      //   children: [
      //     {
      //       state: 'profile',
      //       name: 'User Profile'
      //     }, {
      //       state: 'card',
      //       name: 'User Card'
      //     }
      //   ]
      // }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Record Keeping',
        short_label: 'T',
        name: 'Record Keeping',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: ' Raw Materials',
            name: ' Raw Materials'
          }, {
            state: 'Packaging',
            name: 'Packaging'
          }, {
            state: 'Chemicals',
            name: 'Chemicals'
          }, {
            state: 'Returns',
            name: 'Returns'
          }
        ]
      }
    ]
  },
  // {
  //   label: 'Extension',
  //   main: [
  //     {
  //       state: 'invoice',
  //       short_label: 'I',
  //       name: 'Invoice',
  //       type: 'sub',
  //       icon: 'icon-layout-media-right',
  //       children: [
  //         {
  //           state: 'basic',
  //           name: 'Invoice'
  //         }, {
  //           state: 'summary',
  //           name: 'Invoice Summary'
  //         }, {
  //           state: 'list',
  //           name: 'Invoice List'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'file-upload-ui',
  //       short_label: 'F',
  //       name: 'File Upload',
  //       type: 'link',
  //       icon: 'icon-cloud-up'
  //     },
  //     /*{
  //       state: 'documentation',
  //       short_label: 'D',
  //       name: 'Documentation',
  //       external: 'http://html.codedthemes.com/gradient-able/doc-angular-5',
  //       type: 'external',
  //       icon: 'icon-file',
  //       target: true
  //     }*/
  //   ]
  // },
  // {
  //   label: 'Other',
  //   main: [
  //     {
  //       state: '',
  //       short_label: 'M',
  //       name: 'Menu Levels',
  //       type: 'sub',
  //       icon: 'icon-direction-alt',
  //       children: [
  //         {
  //           state: '',
  //           name: 'Menu Level 2.1',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.2',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.2',
  //               target: true
  //             }
  //           ]
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.3',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.4',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.2',
  //               target: true
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       state: 'simple-page',
  //       short_label: 'S',
  //       name: 'Simple Page',
  //       type: 'link',
  //       icon: 'icon-layout-sidebar-left'
  //     }
  //   ]
  // },
  // {
  //   label: 'Support',
  //   main: [
  //     /*{
  //       state: 'documentation',
  //       short_label: 'D',
  //       name: 'Documentation',
  //       external: 'http://html.codedthemes.com/guru-able/doc-angular-4',
  //       type: 'external',
  //       icon: 'icon-file',
  //       target: true
  //     },*/
  //     {
  //       state: 'submit-issue',
  //       short_label: 'S',
  //       external: 'https://codedthemes.com/submit-ticket/',
  //       name: 'Submit Issue',
  //       type: 'external',
  //       icon: 'icon-layout-list-post',
  //       target: true
  //     }
  //   ]
  // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}