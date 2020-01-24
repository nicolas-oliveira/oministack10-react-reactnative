import React from 'react';
import './global.css';
import './app.css';
import './Sidebar.css';
import './Main.css';

function App(){
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
        
            <div class="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required />
            </div>

            <div class="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
            </div>
            
            <div class="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
            </div>
            
            <button type="submit">Salvar</button>
            </form>
        </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45501748?v=4" alt="Nicolas Oliveira"></img>
              <div className="user-info">
                <strong>Nicolas Oliveira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div> 
            </header>
            <p>Programador Iniciante, amante da tecnologia, aspirante das tecnologias JS e Web em geral. Curisoso, em busca de conhecimento e se tornar Júnior em programação</p>
          <a href="https://github.com/nicolas-oliveira">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45501748?v=4" alt="Nicolas Oliveira"></img>
              <div className="user-info">
                <strong>Nicolas Oliveira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div> 
            </header>
            <p>Programador Iniciante, amante da tecnologia, aspirante das tecnologias JS e Web em geral. Curisoso, em busca de conhecimento e se tornar Júnior em programação</p>
          <a href="https://github.com/nicolas-oliveira">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45501748?v=4" alt="Nicolas Oliveira"></img>
              <div className="user-info">
                <strong>Nicolas Oliveira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div> 
            </header>
            <p>Programador Iniciante, amante da tecnologia, aspirante das tecnologias JS e Web em geral. Curisoso, em busca de conhecimento e se tornar Júnior em programação</p>
          <a href="https://github.com/nicolas-oliveira">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45501748?v=4" alt="Nicolas Oliveira"></img>
              <div className="user-info">
                <strong>Nicolas Oliveira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div> 
            </header>
            <p>Programador Iniciante, amante da tecnologia, aspirante das tecnologias JS e Web em geral. Curisoso, em busca de conhecimento e se tornar Júnior em programação</p>
          <a href="https://github.com/nicolas-oliveira">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;