
import { RouterHelper } from "../helpers";
import Views from '@coc/views'


const routers  = new RouterHelper();
const PATH_PANEL = '/dashboard/'
routers
.add(
    {
        name: 'dashboard.component',
        component: Views.Home,
        path: `${PATH_PANEL }home`,
        label: 'Home',
        exact: true,
        icon: 'icon-home fa-lg'
})
.add({
    name: 'dashboard.table',
    component: Views.Table,
    path: `${PATH_PANEL }table`,
    label: 'Table',
    exact: true,
    icon: 'icon-grid fa-lg'
});

export default routers;