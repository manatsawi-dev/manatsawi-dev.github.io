import {StyledWorkContainer, StyledWorkItem, StyledWorkImage, StyledWorkItemSpace, StyledWorkDesc, StyledDesc} from './styled-component';
import Header from '../../components/header';
import workList from './work-list';
import {lightTheme} from '../../styles/themes';

const WorkList = () => {
  return (
    <>
      {workList.map((item, index) => {
        return (
          <StyledWorkContainer
            id={`rcwork-${item.id}`}
            key={index.toString()}
            revers={item.imageFloat === 'right'}
            bottomBorder={index < workList.length - 1}>
            <StyledWorkItem float="right" textLeft={item.imageFloat === 'right'}>
              {item.imageFloat === 'left' && <StyledWorkImage src={item.image} />}
              {item.imageFloat === 'right' && (
                <StyledWorkDesc textLeft>
                  <Header variant="h3" color={lightTheme.success}>
                    {item.title}
                  </Header>
                  <StyledDesc>{item.description}</StyledDesc>
                </StyledWorkDesc>
              )}
            </StyledWorkItem>
            <StyledWorkItemSpace />
            <StyledWorkItem float="left" text={item.imageFloat === 'left'}>
              {item.imageFloat === 'right' && <StyledWorkImage src={item.image} />}
              {item.imageFloat === 'left' && (
                <StyledWorkDesc>
                  <Header variant="h3" color={lightTheme.success}>
                    {item.title}
                  </Header>
                  <StyledDesc>{item.description}</StyledDesc>
                </StyledWorkDesc>
              )}
            </StyledWorkItem>
          </StyledWorkContainer>
        );
      })}
    </>
  );
};

WorkList.propTypes = {};

export default WorkList;
