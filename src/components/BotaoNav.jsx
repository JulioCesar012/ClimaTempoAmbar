import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PageviewIcon from '@material-ui/icons/Pageview';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import { useDispatch, useSelector } from "react-redux";
import * as Types from '../store/actions/actionTypes';

import './styles.css';

export default function BotaoNav() {
    const value = useSelector(state => state.previsao.botaoNavbar)
    const dispatch = useDispatch()

    return (
        <BottomNavigation
            className="botao-navbar"
            value={value}
            onChange={(event, newValue) => {
                dispatch({ type: Types.SET_BOTAO_NAVBAR, payload: newValue });
            }}
            showLabels
        >
            <BottomNavigationAction label="Pesquisar cidades" icon={<FindInPageIcon />} />
            <BottomNavigationAction label="Buscas recentes" icon={<PageviewIcon />} />
        </BottomNavigation>
    );
}
