import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

export const About: React.StatelessComponent = (): JSX.Element => (
  <div>

    <Link to="/">
     <h3 className="home-1">Multiple Medium Search Result System</h3>
      <h3 className="home-2">Search</h3>
      
    </Link>
    <div className="center">
      <h4>About</h4>
      <h4><a href="">Hosted in Online</a></h4>
      <p>
        (Search Engine  is the method for answering a query in
an English language. When compared to other systems we are trying to
communicate easily between users and computers. It avoids the data
contents that are vast in quantity which are displayed as links in search
engines instead of getting the exact answers. For complicated questions we
are providing the idea to generate the answers. In many cases the results
are good which are selected by users. The information gainers are gaining
the information for certain specific questions in any topic and get answers.
The community contributed answers (CCA) are providing the answers in a
simply and effectively using search engines. When compared to
Automated QA and community QA we are providing the better solution.
Many number of QA are searched for finding the solution. The present
procedure is only providing the answers only in textual answers. But it
may not be sufficient and cannot easily understand and they can get the
data easily. In figure 1: How to make Orange juice concentrate. It has
given only textual answers for getting the information easily we are
providing images and videos for any object. We are adding multimedia
contents to the answers for getting the information.
        
        )
      </p>
    
    </div>
  </div>
);
