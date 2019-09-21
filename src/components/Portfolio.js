import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';
import MyWebsiteImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class Portfolio extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }

    const item1 = {
        backgroundImage: "url(" + MyWebsiteImage + ")"
    }
    
    return (
        <section id="portfolio" style={backgroundStyle} className="portfolio">
            <div className="item-list">
                <div className="item">
                    <div className="item-image" style={item1}></div>
                    <div className="item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Sed quid attinet de rebus tam apertis plura requirere? Quae diligentissime contra Aristonem dicuntur a Chryippo. Cenasti in vita numquam bene, cum omnia in ista Consumis squilla atque acupensere cum decimano. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Duo Reges: constructio interrete. Quod quidem iam fit etiam in Academia. Habent enim et bene longam et satis litigiosam disputationem. Ut in geometria, prima si dederis, danda sunt omnia. De illis, cum volemus. </p>
                        <p>Quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Hoc loco tenere se Triarius non potuit. Oratio me istius philosophi non offendit; A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; </p>
                        <p>Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Frater et T. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Sic enim censent, oportunitatis esse beate vivere. Sed quanta sit alias, nunc tantum possitne esse tanta. Conferam tecum, quam cuique verso rem subicias; </p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image" style={item1}></div>
                    <div className="item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Sed quid attinet de rebus tam apertis plura requirere? Quae diligentissime contra Aristonem dicuntur a Chryippo. Cenasti in vita numquam bene, cum omnia in ista Consumis squilla atque acupensere cum decimano. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Duo Reges: constructio interrete. Quod quidem iam fit etiam in Academia. Habent enim et bene longam et satis litigiosam disputationem. Ut in geometria, prima si dederis, danda sunt omnia. De illis, cum volemus. </p>
                        <p>Quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Hoc loco tenere se Triarius non potuit. Oratio me istius philosophi non offendit; A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; </p>
                        <p>Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Frater et T. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Sic enim censent, oportunitatis esse beate vivere. Sed quanta sit alias, nunc tantum possitne esse tanta. Conferam tecum, quam cuique verso rem subicias; </p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image" style={item1}></div>
                    <div className="item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Sed quid attinet de rebus tam apertis plura requirere? Quae diligentissime contra Aristonem dicuntur a Chryippo. Cenasti in vita numquam bene, cum omnia in ista Consumis squilla atque acupensere cum decimano. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Duo Reges: constructio interrete. Quod quidem iam fit etiam in Academia. Habent enim et bene longam et satis litigiosam disputationem. Ut in geometria, prima si dederis, danda sunt omnia. De illis, cum volemus. </p>
                        <p>Quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Hoc loco tenere se Triarius non potuit. Oratio me istius philosophi non offendit; A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; </p>
                        <p>Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Frater et T. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Sic enim censent, oportunitatis esse beate vivere. Sed quanta sit alias, nunc tantum possitne esse tanta. Conferam tecum, quam cuique verso rem subicias; </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
