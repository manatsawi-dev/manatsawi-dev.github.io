import {useState} from 'react';
import {
  StyledContainer,
  StyledWrapText,
  StyledRow,
  StyledWrapBody,
  StyledColumn,
  StyledProfile,
  StyledRowSocial,
  StyledSocialItem,
} from './styled-component';
import Header from '../../components/header';
import Text from '../../components/text';
import Thumbnail from '../../components/thumbnail';
import Icon from '../../components/icon';
import Content from '../../res/content/index.json';
import ImgProfile from '../../res/assets/images/profile.jpeg';
import {socialList} from './social-list';
import {lightTheme} from '../../styles/themes';

const HomeView = () => {
  const [activeSocial, setActiveSocial] = useState({});

  const onHoverSocialItem = (id) => {
    const newActive = {...activeSocial};
    newActive[id] = true;
    setActiveSocial({...newActive});
  };

  const onLeaveSocialItem = (id) => {
    const newActive = {...activeSocial};
    delete newActive[id];
    setActiveSocial({...newActive});
  };

  return (
    <>
      <StyledContainer>
        <StyledRow>
          <StyledColumn center>
            <StyledWrapBody>
              <StyledWrapText>
                <Header variant="h4" color={lightTheme.orange}>
                  {Content.home.hi}
                </Header>
              </StyledWrapText>
              <StyledWrapText inlineTop>
                <Header variant="h1">{Content.home.title}</Header>
              </StyledWrapText>
              <StyledWrapText>
                <Header variant="h3" color={lightTheme.success}>
                  {Content.home.position}
                </Header>
              </StyledWrapText>
              <Text>{Content.home.bio}</Text>
            </StyledWrapBody>
          </StyledColumn>
          <StyledColumn center>
            <StyledProfile>
              <Thumbnail circle src={ImgProfile} size={300} />
            </StyledProfile>
            <StyledRowSocial>
              {socialList.map((item, index) => (
                <StyledSocialItem
                  key={index.toString()}
                  id={`sc-${index}`}
                  href={item.link}
                  target="_blank"
                  onMouseLeave={() => onLeaveSocialItem(item.id)}
                  onMouseEnter={() => onHoverSocialItem(item.id)}>
                  <Icon name={item.icon} color={activeSocial[item.id] ? item.color : null} />
                </StyledSocialItem>
              ))}
            </StyledRowSocial>
          </StyledColumn>
        </StyledRow>
      </StyledContainer>
    </>
  );
};
export default HomeView;
