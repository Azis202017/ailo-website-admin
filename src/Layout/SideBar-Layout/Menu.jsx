import { BlogSvg, BonusUISvg, ButtonsSvg, CalanderSvg, ChartsSvg, ChatSvg, ContactSvg, EcommerceSvg, EditorsSvg, EmailSvg, FAQSvg, FilemanagerSvg, FormsSvg, GallarySvg, HeaderBookmarkSvg, HomeSvg, IconsSvg, JobsearchSvg, KanbanSvg, KnowledgebaseSvg, LearningSvg, MapsSvg, OthersSvg, ProjectSvg, SamplePageSvg, SearchResultSvg, SocialappSvg, SupportTicketSvg, TablesSvg, TaskSvg, TodoSvg, UiKitsSvg, UsersComponentSvg, WidgetsSvg } from '../../Data/svgIcons';

export const MENUITEMS = [
 
    {
        menutitle: 'Charts',
        Items: [
            {
                title: 'Charts', icon: ChartsSvg, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/charts/apex`, title: 'Apex Charts ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/google`, title: 'Google Charts', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartist`, title: 'Chartist Charts', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartjs`, title: 'ChartJs Charts', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Sample Page',
        Items: [
            { path: `${process.env.PUBLIC_URL}/sample-page`, icon: SamplePageSvg, title: 'Sample Page', type: 'link' }
        ]
    },
   
  
];