import React, { useContext } from 'react';
import Box from '../components/Box';
import PageHeader from '../components/PageHeader';
import { AppContext } from '../AppContext';

const projects = [["Scriptle", "scriptle", "scriptleDescLong", "React, TypeScript, Tailwind, Vite", "Aa"], ["İsimBul", "isimbul", "isimbulDescLong", "React 19, Tailwind, Recharts, D3 Force", "İ"], ["TR Morph Analyzer", "tr-pos-tagger", "posTaggerDescLong", "Python, FastAPI, Zemberek, JavaScript", "tr"], ["Budgetize", "Budgetize", "budgetizeDescLong", "React, TailwindCSS, ExpressJS, Puppeteer", "$"], ["Hecele!", "Turkish-Bomb-Party-Game", "heceleDescLong", "JavaScript, HTML5, CSS3, Python", "he"], ["Turkish Wordle", "turkish-wordle", "wordleDescLong", "JavaScript, HTML5, CSS3", "W"]];

export default function ProjectsPage() {
  const { t } = useContext(AppContext);
  return (
    <main className="dashboard detail-page">
      <PageHeader title={t.projects} />
      <div className="projects-grid">
        {projects.map(([name, repo, description, stack, symbol], index) => (
          <Box key={name} entranceDelay={index * 0.05} className={'project-detail accent-' + index % 3}>
            <div className="project-art" aria-hidden="true">
              <span>{symbol}</span><i /><i /><i />
            </div>
            <h2 className="dashboard-heading">
              <a href={'https://github.com/berkcan25/' + repo} target="_blank" rel="noreferrer">{name}</a>
            </h2>
            <p className="dashboard-copy">{t[description]}</p>
            <div className="stack-tags">{stack.split(', ').map(tool => <span key={tool}>{tool}</span>)}</div>
          </Box>
        ))}
      </div>
    </main>
  );
}
