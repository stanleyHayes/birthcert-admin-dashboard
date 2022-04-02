import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";

const SidebarLink = ({active, path, label, icon}) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
        dispatch(UI_ACTION_CREATORS.changeURL(path));
    }

    return (
        <Button
            startIcon={icon}
            sx={{
                borderRightWidth: active ? 3 : 0,
                borderRightStyle: active ? 'solid' : 'none',
                borderRightColor: active ? "primary.main" : 'none',
                color: active ? "text.link" : "text.secondary",
                fontWeight: active ? 700 : 500,
                borderRadius: 0,
                justifyContent: 'flex-start',
                textTransform: 'capitalize',
                fontSize: 14,
                pl: 4
            }}
            variant="text"
            size="medium"
            fullWidth={true}
            onClick={handleClick}>
            {label}
        </Button>
    )
}

export default SidebarLink;
