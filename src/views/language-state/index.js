/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
import ReactMarkdown from 'react-markdown';
import {StyledLangStateContainer} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';

const LanguageStateView = () => {
  return (
    <StyledLangStateContainer id="sc-lang-state">
      <Header variant="h2">{Content.mostUsedLang.title}</Header>
      <ReactMarkdown>
        [![TopLangs](https://github-readme-stats.vercel.app/api/top-langs/?username=manatsawi-dev&layout=compact&card_width=270)](https://github.com/anuraghazra/github-readme-stats)
      </ReactMarkdown>
      {/* <ReactMarkdown>
        [![willianrod'swakatimestats](https://github-readme-stats.vercel.app/api/wakatime?username=Sutlaeo&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
      </ReactMarkdown> */}
    </StyledLangStateContainer>
  );
};

LanguageStateView.propTypes = {};

export default LanguageStateView;
