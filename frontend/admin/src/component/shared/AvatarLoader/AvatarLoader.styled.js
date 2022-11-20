import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    color: theme.$styled.colors.text50,
    backgroundColor: theme.palette.primary.main,
    width: '48px',
    height: '48px',
}))

export default StyledAvatar;