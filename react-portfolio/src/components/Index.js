import author from '../img/author.png';
import React, { useEffect } from 'react';

export default function Index() {

  // create typing and removing effect smooth animation 
  useEffect(() => {

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };


    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);


  }, []);




  return (
    <>
      <main>
        <div className="introduction">
          <div className="my_img">
            <img src={author} alt="Md. Almas Ali" title="Md. Almas Ali" />
          </div>
          <p className="my_name glow">Md. Almas Ali</p>
          <p className="bio"> A&nbsp;
            <span className="typewrite bio" data-type='["Developer","Programmer", "Software Engineer", "Muslim"]'
              data-period="1000">
            </span>
          </p>
        </div>


        <div className="container">

          <div className="details">
            <details>
              <summary>Works
              </summary>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquid totam esse sed minima, aut in delectus porro vitae nihil itaque obcaecati praesentium nostrum, laboriosam voluptatibus deleniti laborum sapiente, alias consectetur iusto fuga illum provident. Cum officia corrupti recusandae iusto aperiam aut consequuntur sint atque illo cupiditate eum debitis consectetur possimus quidem, nobis dolorum optio. Cum cupiditate eligendi aliquam alias atque inventore culpa libero animi, repellendus quo repudiandae sunt eius eaque consequuntur reiciendis dolores esse odio sit. Officiis laboriosam impedit nemo earum saepe molestias voluptatum, aliquid veniam quo fuga alias labore itaque aspernatur assumenda sapiente quaerat accusantium consequuntur id facilis ipsa sit! Nobis tenetur iste consectetur sed animi ea ab adipisci repellendus placeat vel, similique, nemo incidunt, ex officia excepturi quam quaerat modi. Repellat, beatae temporibus? Quam consequatur maiores explicabo dolore quia tenetur nisi, exercitationem excepturi? Odit officiis maxime perferendis ullam, dignissimos illo? Explicabo voluptatum laudantium animi illo! Quisquam doloribus laboriosam obcaecati, odit hic corrupti sunt dignissimos nihil. A nisi minus deleniti delectus dolorum pariatur architecto modi, eos, repellendus error voluptas ipsum dignissimos alias eum incidunt animi. In quidem possimus doloremque totam ullam dolores dignissimos sunt. Nesciunt, sed sapiente! Soluta repellat delectus fugit placeat. Cumque ipsa sit iusto excepturi labore necessitatibus esse vel sapiente. Deserunt incidunt repudiandae aspernatur dicta eaque ut tempore, iusto aut et, corrupti illum sed accusantium asperiores nihil architecto quaerat assumenda! Voluptas magni quibusdam ex laborum perspiciatis reiciendis unde at ab, mollitia, repudiandae optio veritatis placeat! Qui quaerat aspernatur quam dolorem unde tempora quos labore aut fugiat voluptate. Placeat a, repudiandae consequatur consequuntur aperiam quaerat quos repellendus magni id, numquam adipisci qui, officia cum assumenda sapiente nesciunt. Amet iusto consequatur, impedit quaerat voluptatem id, velit, ratione accusamus mollitia maxime corporis doloribus hic vero unde! Incidunt voluptatem possimus quaerat itaque necessitatibus nulla quasi exercitationem laborum porro eligendi, fugiat libero officia tempore quia repellendus sequi? Consequatur assumenda, ducimus corrupti sit blanditiis, reprehenderit incidunt pariatur illum aliquam recusandae natus error quas dignissimos laudantium corporis rem? Illo inventore in, neque, commodi harum sequi esse dolore amet mollitia doloremque alias illum, dolores eum. Illo dolorum consequuntur obcaecati?
            </details>
          </div>

        </div>

      </main>
    </>
  )
}
