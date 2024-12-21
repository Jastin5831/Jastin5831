import {
  Link
} from 'react-router-dom';
import '../css/tutorials.css?version=1.0.1';

export default function Tutorials() {
  return (
    <>
      <main className='tutorial-main'>

        <aside className='sidebar'>
          <ul>
            <li>
              <Link to="#">Intro</Link>
            </li>
            <li>
              <Link to="#">Basic</Link>
            </li>
            <li>
              <Link to="#">Install</Link>
            </li>
            <li>
              <Link to="#">Quick</Link>
            </li>
            <li>
              <Link to="#">Summary</Link>
            </li>
          </ul>
        </aside>

        <div className="body">
          body contents
        </div>

      </main>

    </>
  )
}
