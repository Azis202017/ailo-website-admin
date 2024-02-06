import { BlogSvg, BonusUISvg, ButtonsSvg, CalanderSvg, ChartsSvg, ChatSvg, ContactSvg, EcommerceSvg, EditorsSvg, EmailSvg, FAQSvg, FilemanagerSvg, FormsSvg, GallarySvg, HeaderBookmarkSvg, HomeSvg, IconsSvg, JobsearchSvg, KanbanSvg, KnowledgebaseSvg, LearningSvg, MapsSvg, OthersSvg, ProjectSvg, SamplePageSvg, SearchResultSvg, SocialappSvg, SupportTicketSvg, TablesSvg, TaskSvg, TodoSvg, UiKitsSvg, UsersComponentSvg, WidgetsSvg } from '../../Data/svgIcons';

export const MENUITEMS = [

    {
        menutitle: 'Dashboard',
        Items: [
            { path: `${process.env.PUBLIC_URL}/dashboard`, icon: SamplePageSvg, title: 'Dashboard', type: 'link' }
        ]
    },
    {
        menutitle: 'Profile Settings',
        Items: [
            {
                title: 'Profile Settings', icon: UsersComponentSvg, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/profile/edit-profile`, title: 'Edit Profile ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/profile/edit-expertise`, title: 'Edit Expertise', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/profile/edit-research`, title: 'Edit Research', type: 'link' },
                ]
            },

        ]
    },


];