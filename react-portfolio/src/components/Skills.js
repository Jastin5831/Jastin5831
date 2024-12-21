import React, { useEffect } from 'react'

export default function Skills() {


  useEffect(() => {
    let value = document.getElementsByClassName('persent');
    for (let index = 0; index < value.length; index++) {
      // const element = value[index];
      value[index].style.width = value[index].innerText;
    }
  }, []);


  return (
    <>
      <div className="connections" id="skills">
        <p className="title skills">Skills</p>
        <ul className="programming_languages">
          <p className="title">Pogramming Languages</p>

          <div className="pro_level">
            <i className="fab fa-python" title="Python"></i>
            <div className="progressbar">
              <div className="persent">95%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fa-solid fa-c" title="C"></i>
            <div className="progressbar">
              <div className="persent">30%</div>
            </div>
          </div>

        </ul>

        <ul className="frontend">
          <p className="title">Frontend Languages</p>

          <div className="pro_level">
            <i className="fab fa-html5" aria-hidden="true" title="HTML5"></i>
            <div className="progressbar">
              <div className="persent">90%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fab fa-css3-alt" aria-hidden="true" title="CSS3"></i>
            <div className="progressbar">
              <div className="persent">60%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fab fa-js" title="Javascript"></i>
            <div className="progressbar">
              <div className="persent">20%</div>
            </div>
          </div>
        </ul>

        <ul className="frontend_framework">
          <p className="title">Frontend Framework</p>

          <div className="pro_level">
            <i className="fa-brands fa-bootstrap" title="Bootstrap"></i>
            <div className="progressbar">
              <div className="persent">60%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fa-brands fa-react" title="ReactJs"></i>
            <div className="progressbar">
              <div className="persent">15%</div>
            </div>
          </div>

        </ul>

        <ul className="backend_languages">
          <p className="title">Backend Languages</p>

          <div className="pro_level">
            <i className="fab fa-php" title="PHP"></i>
            <div className="progressbar">
              <div className="persent">25%</div>
            </div>
          </div>

        </ul>

        <ul className="backend_framework">
          <p className="title">Backend Framework</p>

          <div className="pro_level">
            <i className="fa-brands fa-laravel" title="Laravel"></i>
            <div className="progressbar">
              <div className="persent">75%</div>
            </div>
          </div>
          <div className="pro_level">
            django
            <div className="progressbar">
              <div className="persent">65%</div>
            </div>
          </div>
          <div className="pro_level">
            <i className="fab fa-affiliatetheme" title="Flask"></i>
            <div className="progressbar">
              <div className="persent">25%</div>
            </div>
          </div>

        </ul>

        <ul className="database">
          <p className="title">Database</p>

          <div className="pro_level">
            <i className="fa fa-database" aria-hidden="true" title="MySQL"></i>
            <div className="progressbar">
              <div className="persent">20%</div>
            </div>
          </div>

        </ul>

        <ul className="scripting_languages">
          <p className="title">Scripting Languages</p>

          <div className="pro_level">
            <i className="fa fa-cube" aria-hidden="true" title="shell"></i>
            <div className="progressbar">
              <div className="persent">80%</div>
            </div>
          </div>


        </ul>

        <ul className="version_management">
          <p className="title">Version Management</p>

          <div className="pro_level">
            <i className="fab fa-git" title="Git"></i>
            <div className="progressbar">
              <div className="persent">30%</div>
            </div>
          </div>
        </ul>

        <ul className="browsers">
          <p className="title">Browsers</p>

          <div className="pro_level">
            <i className="fab fa-firefox" aria-hidden="true" title="Firefox"></i>
            <div className="progressbar">
              <div className="persent">80%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fab fa-chrome" aria-hidden="true" title="Chrome"></i>
            <div className="progressbar">
              <div className="persent">75%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fab fa-opera" aria-hidden="true" title="Opera"></i>
            <div className="progressbar">
              <div className="persent">60%</div>
            </div>
          </div>

        </ul>

        <ul className="operating_systems">
          <p className="title">Operating Systems</p>

          <div className="pro_level">
            <i className="fab fa-windows" aria-hidden="true" title="Windows"></i>
            <div className="progressbar">
              <div className="persent">95%</div>
            </div>
          </div>

          <div className="pro_level">
            <i className="fab fa-linux" aria-hidden="true" title="Linux"></i>
            <div className="progressbar">
              <div className="persent">80%</div>
            </div>
          </div>
        </ul>

        <ul className="social_media">
          <p className="title">Social Media Links</p>

          <i className="fab fa-github" aria-hidden="true" title="Github"></i>
          <i className="fab fa-facebook" aria-hidden="true" title="Facebook"></i>
          <i className="fab fa-facebook-messenger" aria-hidden="true" title="Messenger"></i>
          <i className="fab fa-instagram" aria-hidden="true" title="Instagram"></i>

        </ul>
      </div>
    </>
  )
}
