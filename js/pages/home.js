/* header start */
/* header end */

/* hero start */
/* hero end */

/* features start */
import { features } from '../components/features.js';
import {featuresData} from '../data/featuresData.js';

features('#features_block', featuresData);
/* features end */

/* sApp start */
/* sApp end */

/* Device start */
/* Device end */

/* how sApp works start */
import { workData } from '../data/workData.js';
import { work } from '../components/work.js';

work(workData);
/* how sApp works end */

/* interface start */
/* interface end */

/* Testimonials start */
/* Testimonials end */

/* purchase plans start */
/* purchase plans end */

/* FAQ start */
import { faq } from '../components/faq.js';
import {faqData} from '../data/faqData.js';

faq('#faq_block', faqData);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/* FAQ end */

/* Team experts start */
/* Team experts end */

/* Appstore section start */
/* Appstore section end */

/* Subscribe start */
/* Subscribe end */

/* Stay tuned start */
/* Stay tuned end */

/* Footer start */
/* Footer end */