import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() {
		this.onResize();
		if (this.screenWidth < 1199) {
		  this.closeSidebar = true;
		  this.sidebarToggle = false;
		}
	  }

	public screenWidth: any;
	public closeSidebar: boolean = false;
	public sidebarToggle: boolean = true;
	  public fullScreen = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Dashboard', icon: 'home', type: 'sub', badgeType: 'pill gradient-primary-1', badgeValue: '4', active: true, children: [
				{ path: '/dashboard/default', title: 'Default', type: 'link' },
				{ path: '/dashboard/hospital', title: 'Hospital', type: 'link' },
				{ path: '/dashboard/sass', title: 'Sass', type: 'link' },
				{ path: '/dashboard/crm', title: 'Crm', type: 'link' },
				{ path: '/dashboard/crypto', title: 'Crypto', type: 'link' }
			]
		},
		{
			title: 'Widgets', icon: 'airplay', type: 'sub', active: false, children: [
				{ path: '/widgets/general', title: 'General', type: 'link' },
				{ path: '/widgets/chart', title: 'Chart', type: 'link' }
			]
		},
		{
			title: 'UI-Elements', icon: 'slack', type: 'sub', active: false, children: [
				{ path: '/ui-elements/avatars', title: 'Avatars', type: 'link' },
				{ path: '/ui-elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
				{ path: '/ui-elements/grid', title: 'Grid', type: 'link' },
				{ path: '/ui-elements/helper-classes', title: 'Helper-Classes', type: 'link' },
				{ path: '/ui-elements/list', title: 'List', type: 'link' },
				{ path: '/ui-elements/ribbons', title: 'Ribbons', type: 'link' },
				{ path: '/ui-elements/shadow', title: 'Shadow', type: 'link' },
				{ path: '/ui-elements/spinner', title: 'Spinner', type: 'link' },
				{ path: '/ui-elements/state-color', title: 'State-color', type: 'link' },
				{ path: '/ui-elements/steps', title: 'Steps', type: 'link' },
				{ path: '/ui-elements/tag-n-pills', title: 'Tag and Pills', type: 'link' },
				{ path: '/ui-elements/typography', title: 'Typography', type: 'link' }
			]
		},
		{
			title: 'Base', icon: 'box', type: 'sub', active: false, children: [
				{ path: '/base/accordion', title: 'Accordion', type: 'link' },
				{ path: '/base/alert', title: 'Alert', type: 'link' },
				{ path: '/base/buttons', title: 'Buttons', type: 'link' },
				{ path: '/base/carousel', title: 'Carousel', type: 'link' },
				{ path: '/base/collapse', title: 'Collapse', type: 'link' },
				{ path: '/base/datepicker', title: 'Datepicker', type: 'link' },
				{ path: '/base/dropdown', title: 'Dropdown', type: 'link' },
				{ path: '/base/modal', title: 'Modal', type: 'link' },
				{ path: '/base/pagination', title: 'Pagination', type: 'link' },
				{ path: '/base/popover', title: 'Popover', type: 'link' },
				{ path: '/base/progressbar', title: 'Progressbar', type: 'link' },
				{ path: '/base/rating', title: 'Rating', type: 'link' },
				{ path: '/base/tabset', title: 'Tabset', type: 'link' },
				{ path: '/base/timepicker', title: 'Timepicker', type: 'link' },
				{ path: '/base/tooltip', title: 'Tooltip', type: 'link' },
				{ path: '/base/typeahead', title: 'Typeahead', type: 'link' }
			]
		},
		{
			title: 'Advance', icon: 'folder-plus', type: 'sub', active: false, children: [
				{ path: '/advance/scrollable', title: 'Scrollable', type: 'link' },
				{ path: '/advance/tree-view', title: 'Tree view', type: 'link' },
				{ path: '/advance/dropzone', title: 'Dropzone', type: 'link' },
				{ path: '/advance/tour', title: 'Tour', type: 'link' },
				{ path: '/advance/sweetAlert2', title: 'SweetAlert2', type: 'link' },
				{ path: '/advance/owl-carousel', title: 'Owl Carousel', type: 'link' },
				{ path: '/advance/ribbons', title: 'Ribbons', type: 'link' },
				{ path: '/advance/pagination', title: 'Pagination', type: 'link' },
				{ path: '/advance/range-slider', title: 'Range Slider', type: 'link' },
				{ path: '/advance/image-cropper', title: 'Image cropper', type: 'link' },
				{ path: '/advance/sticky', title: 'Sticky', type: 'link' },
			]
		},
		{
			title: 'Icons', icon: 'command', type: 'sub', active: false, children: [
				{ path: '/icons/flag', title: 'Flag icon', type: 'link' },
				{ path: '/icons/fontawesome', title: 'Fontawesome Icon', type: 'link' },
				{ path: '/icons/ico', title: 'Ico Icon', type: 'link' },
				{ path: '/icons/themify', title: 'Themify Icon', type: 'link' },
				{ path: '/icons/feather', title: 'Feather Icon', type: 'link' },
				{ path: '/icons/weather', title: 'Weather Icon', type: 'link' },
				{ path: '/icons/simple-line-icon', title: 'Simple line Icon', type: 'link' },
				{ path: '/icons/material-design-icon', title: 'Material Design Icon', type: 'link' },
				{ path: '/icons/pe7-icon', title: 'pe7 icon', type: 'link' },
				{ path: '/icons/typicons-icon', title: 'Typicons icon', type: 'link' },
				{ path: '/icons/ionic-icon', title: 'Ionic icon', type: 'link' },
			]
		},
		{
			title: 'Buttons', icon: 'cloud', type: 'sub', active: false, children: [
				{ path: '/buttons/default', title: 'Default Style', type: 'link' },
				{ path: '/buttons/flat', title: 'Flat Style', type: 'link' },
				{ path: '/buttons/edge', title: 'Edge Style', type: 'link' },
				{ path: '/buttons/raised', title: 'Raised Style', type: 'link' },
				{ path: '/buttons/group', title: 'Button Group', type: 'link' }
			]
		},
		{
			title: 'Forms', icon: 'file-text', type: 'sub', active: false, badgeType: 'pill gradient-success', badgeValue: '15', children: [
				{
					title: 'Form Controls', icon: 'file-text', type: 'sub', active: false, children: [
						{ path: '/form/form-controls/validation', title: 'Form Validation', type: 'link' },
						{ path: '/form/form-controls/inputs', title: 'Base Inputs', type: 'link' },
						{ path: '/form/form-controls/checkbox-radio', title: 'Checkbox & Radio', type: 'link' },
						{ path: '/form/form-controls/input-groups', title: 'Input Groups', type: 'link' },
						{ path: '/form/form-controls/mega-options', title: 'Mega Options', type: 'link' },
					]
				},
				{
					title: 'form-widgets', icon: 'file-text', type: 'sub', active: false, children: [
						{ path: '/form/form-widgets/touchspin', title: 'Touchspin', type: 'link' },
						{ path: '/form/form-widgets/ngselect', title: 'Ng-Select', type: 'link' },
						{ path: '/form/form-widgets/switch', title: 'Switch', type: 'link' },
						{ path: '/form/form-widgets/clipboard', title: 'Clipboard', type: 'link' },
					]
				},
				{
					title: 'Form Layout', icon: 'file-text', type: 'sub', active: false, children: [
						{ path: '/form/form-layout/default-form', title: 'Default Forms', type: 'link' },
						{ path: '/form/form-layout/form-wizard', title: 'Form Wizard 1', type: 'link' },
						{ path: '/form/form-layout/form-wizard-two', title: 'Form Wizard 2', type: 'link' },
						{ path: '/form/form-layout/form-wizard-three', title: 'Form Wizard 3', type: 'link' },
						{ path: '/form/form-layout/form-wizard-four', title: 'Form Wizard 4', type: 'link' },
					]
				},
			],
		}, {
			title: 'Tables', icon: 'server', type: 'sub', active: false, children: [
				{
					title: 'Bootstrap Tables', type: 'sub', active: false, children: [
						{ path: '/table/bootstrap-tables/basic', title: 'Basic Table', type: 'link' },
						{ path: '/table/bootstrap-tables/sizing', title: 'Sizing Table', type: 'link' },
						{ path: '/table/bootstrap-tables/border', title: 'Border Table', type: 'link' },
						{ path: '/table/bootstrap-tables/styling', title: 'Styling Table', type: 'link' },
						{ path: '/table/bootstrap-tables/table-components', title: 'Table components', type: 'link' }
					]
				},
				{
					title: 'Datatables', type: 'sub', active: false, children: [
						{ path: '/table/datatables/basic', title: 'Basic Init', type: 'link' },
						{ path: '/table/datatables/fullscreen', title: 'Full Screen', type: 'link' },
						{ path: '/table/datatables/paging', title: 'Paging', type: 'link' },
						{ path: '/table/datatables/selection', title: 'Selection', type: 'link' },
						{ path: '/table/datatables/column-filter', title: 'Column Filter', type: 'link' },
						{ path: '/table/datatables/sort', title: 'Sorting Table', type: 'link' },
						{ path: '/table/datatables/inline-edit', title: 'Editable Table', type: 'link' },
					]
				},
			]
		},
		{
			title: 'Cards', icon: 'book', type: 'sub', active: false, children: [
				{ path: '/cards/basic', title: 'Basic Card', type: 'link' },
				{ path: '/cards/creative', title: 'Creative Card', type: 'link' },
				{ path: '/cards/tabbed', title: 'Tabbed Card', type: 'link' },
				{ path: '/cards/dragable', title: 'Draggable Card', type: 'link' },
			]
		},
		{
			title: 'Timeline', icon: 'sliders', type: 'sub', active: false, children: [
				{ path: '/timeline/timeline1', title: 'Timeline 1', type: 'link' },
				{ path: '/timeline/timeline2', title: 'Timeline 2', type: 'link' }
			]
		},
		{
			title: 'Charts', icon: 'bar-chart', type: 'sub', active: false, badgeType: 'pill gradient-danger', badgeValue: '10', children: [
				{ path: '/chart/apex', title: 'Apex Chart', type: 'link' },
				{ path: '/chart/google', title: 'Google Chart', type: 'link' },
				{ path: '/chart/knob', title: 'Knob Chart', type: 'link' },
				{ path: '/chart/chartjs', title: 'Chartjs Chart', type: 'link' },
				{ path: '/chart/chartist', title: 'Chartist Chart', type: 'link' },
				{ path: '/chart/ngx-chart', title: 'Ngx Chart', type: 'link' },
			]
		},
		{
			title: 'Maps', icon: 'map', type: 'sub', active: false, children: [
				{ path: '/map/google', title: 'Google Maps', type: 'link' },
				{ path: '/map/leaflet', title: 'Leaflet Maps', type: 'link' },
			]
		},
		{
			path: '/editor', title: 'Editor', icon: 'git-pull-request', type: 'link'
		},
		{
			title: 'Users', icon: 'users', type: 'sub', active: false, children: [
				{ path: '/user/team-details', title: 'All Users', type: 'link' },
				{ path: '/user/profile', title: 'User Profile', type: 'link' },
				{ path: '/user/edit-profile', title: 'Edit Profile', type: 'link' },
			]
		},
		{
			path: '/calender', title: 'Calender', icon: 'calendar', type: 'link', bookmark: true
		},
		{
			title: 'Gallery', icon: 'image', type: 'sub', active: false, children: [
				{ path: '/gallery/gallery-grid', title: 'Gallery Grid', type: 'link' },
				{ path: '/gallery/gallery-desc', title: 'Gallery Grid Desc', type: 'link' },
				{ path: '/gallery/mesonry', title: 'Masonry Gallery', type: 'link' },
				{ path: '/gallery/hover', title: 'Hover Effect', type: 'link' },
			]
		},
		{ path: '/email', title: 'Email App', icon: 'mail', type: 'link', bookmark: true },
		{ path: '/contact/contacts', title: 'contact', icon: 'user-plus', type: 'link' },
		{
			title: 'Blog', icon: 'edit', type: 'sub', active: false, children: [
				{ path: '/blog/details', title: 'Blog Details', type: 'link' },
				{ path: '/blog/single', title: 'Single Blog', type: 'link' },
				{ path: '/blog/add-post', title: 'Add Post', type: 'link' },
			]
		},
		{
			path: '/chat', title: 'Chat App', icon: 'message-square', type: 'link', bookmark: true
		},
		{ path: '/social-app', title: 'Social App', icon: 'chrome', type: 'link' },
		{
			title: 'Job Search', icon: 'user-check', type: 'sub', active: false, children: [
				{ path: '/job/cards', title: 'Card Layout', type: 'link' },
				{ path: '/job/list', title: 'List Layout', type: 'link' },
				{ path: '/job/details/1', title: 'Card with Details', type: 'link' },
				{ path: '/job/apply/1', title: 'Apply Now', type: 'link' },
			]
		},
		{
			title: 'Learning', icon: 'layers', type: 'sub', active: false, children: [
				{ path: '/learning/list', title: 'List', type: 'link' },
				{ path: '/learning/detailed-course', title: 'Detailed Course', type: 'link' },
			]
		},
		{ path: '/faq', title: 'FAQ', icon: 'help-circle', type: 'link', active: false },
		{ path: '/knowledgebase', title: 'Knowledgebase', icon: 'database', type: 'link' },
		{ path: '/support-ticket', title: 'Support Ticket', icon: 'headphones', type: 'link' },
		{ path: '/to-do', title: 'Todo', icon: 'mic', type: 'link' },
		{ path: '/to-do-firebase', title: 'Todo FireBase', icon: 'mic', type: 'link' },
		{
			title: 'Ecommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
				{ path: '/ecommerce/products', title: 'Product', type: 'link' },
				{ path: '/ecommerce/product-details/1', title: 'Product page', type: 'link' },
				{ path: '/ecommerce/product/list', title: 'Product list', type: 'link' },
				{ path: '/ecommerce/payment/detail', title: 'Payment Details', type: 'link' },
				{ path: '/ecommerce/order', title: 'Order History', type: 'link' }

			]
		},
		{ path: '/pricing', title: 'Pricing ', icon: 'dollar-sign', type: 'link' },
		{ path: '/sample-page', title: 'Sample Page', icon: 'file', type: 'link' },
		{
			path: '/search-pages', title: 'Search Pages', icon: 'search', type: 'link'
		},
		{
			title: 'Error Pages', icon: 'alert-octagon', type: 'sub', active: false, children: [
				{ path: '/error-page/error-400', title: 'Error400', type: 'link' },
				{ path: '/error-page/error-401', title: 'Error401', type: 'link' },
				{ path: '/error-page/error-403', title: 'Error403', type: 'link' },
				{ path: '/error-page/error-404', title: 'Error404', type: 'link' },
				{ path: '/error-page/error-500', title: 'Error500', type: 'link' },
				{ path: '/error-page/error-503', title: 'Error503', type: 'link' },
			]
		},
		{
			title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
				{ path: '/authentication/simple-login', title: 'Simple Login', type: 'link' },
				{ path: '/authentication/login-with-background-image', title: 'Login With Bg Image', type: 'link' },
				{ path: '/authentication/login-with-background-video', title: 'Login With Bg Video', type: 'link' },
				{ path: '/authentication/simple-register', title: 'Simple Register', type: 'link' },
				{ path: '/authentication/register-with-background-image', title: 'Register With Bg Image', type: 'link' },
				{ path: '/authentication/register-with-background-video', title: 'Register With Bg Video', type: 'link' },
				{ path: '/authentication/unlock-user', title: 'Unlock User', type: 'link' },
				{ path: '/authentication/forgot-password', title: 'Forgot Password', type: 'link' },
				{ path: '/authentication/reset-password', title: 'Reset Password', type: 'link' },
			]
		},
		{
			title: 'Coming Soon', icon: 'briefcase', type: 'sub', active: false, children: [
				{ path: '/coming-soon/simple', title: 'Coming Simple', type: 'link' },
				{ path: '/coming-soon/simple-with-bg-img', title: 'Coming with BG Image', type: 'link' },
				{ path: '/coming-soon/simple-with-bg-vid', title: 'Coming with BG Video', type: 'link' },
			]
		},
		{ path: '/maintenance', title: 'Maintenance ', icon: 'settings', type: 'link' }
	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

	


}
