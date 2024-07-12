import React from 'react'
import imgPageBlog from "../../components/img/DiabeteTechnologie.jpg"; 
import telemedecine from "../../components/img/telemedecine.jpg";
import technoAndDiabete from "../../components/img/technoAndDiabete.jpg";
import '../../components/Styles/BlogDiabete.css'; 
function BlogDiabete() {

window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <div className='container-pageBlog'>
     <img src={imgPageBlog} alt="imgPageBlog" className="imgPageBlog"/><br/>
     <br/>
     <h2>3 FAÇONS DONT LA TECHNOLOGIE A AMÉLIORÉ LES SOINS POUR LES DIABÉTIQUES</h2>
       
     <br/>
      <div className='content-Diabete'>
        <div className='pDiabete'>
      <p>Les soins médicaux évoluent constamment et, de nos jours, 
        ils ont tendance à se faire en grande partie grâce à la technologie.
        Des smartphones avancés et des applications liées à la santé, au passage à la télémédecine,
        en passant par les appareils nouveaux et améliorés, il existe d'innombrables façons dont les soins
        de santé sont modifiés par la technologie. Dans cet article, nous voulons examiner comment certains
        des changements ont entraîné une amélioration des soins pour les personnes qui gèrent le diabète.</p>
        </div>
        
        <ul>
            <ol> <span className="ol-number">1. SURVEILLANCE CONTINUE DU GLUCOSE </span>
              <p>
                La vérification de la glycémie est un élément important de la surveillance du diabète,
                mais comme trop de gens le savent trop bien, il peut aussi être pénible de se piquer le doigt
                tout au long de la journée. Dernièrement cependant, la surveillance continue du glucose, ou CGM,
                est devenue une alternative populaire et pratique à la méthode traditionnelle de piqûre au doigt.
                Les patients qui choisissent d'utiliser la CGM n'ont qu'à insérer un capteur sous la peau du ventre 
                ou du bras pour obtenir des lectures de glycémie tout au long de la journée.  <br/>
                 <br/>
                Une entreprise populaire dans ce domaine est Dexcom, qui a développé le Système de surveillance SGC Dexcom 
                G6 pour aider les personnes atteintes de diabète (type 1 ou 2) à surveiller facilement leur glycémie. 
                Les patients peuvent voir à tout moment à quel point leur taux de glucose est élevé ou bas sans avoir à porter
                de bandelettes ou à se piquer les doigts. </p>
            </ol>
            <ol><span className="ol-number">2. GADGETS D'AUTO-SURVEILLANCE PORTABLES </span>
            <p>
               Voir un médecin pour une consultation occasionnelle est formidable, mais certaines conditions
               comme le diabète –– nécessitent une attention plus régulière qu'un médecin ne peut en fournir. 
               C'est là que les wearables modernes entrent en jeu.  <br/>
                 <br/>
                 De nos jours, les patients peuvent se surveiller grâce à des appareils technologiques 
                 comme le Montre connectée Fitbit Versa. Ce type de montre avancé peut faire de 
                 nombreuses choses utiles, comme surveiller la fréquence cardiaque, vérifier les niveaux d'oxygène 
                 dans le sang et permettre aux utilisateurs de voir les lectures Dexcom CGM. 
                 Si la montre intelligente reçoit des lectures de glycémie trop élevées ou trop basses, 
                 elle vibrera  informant ainsi le patient de prendre les mesures appropriées. </p>
                 <img src={technoAndDiabete } alt="telemedecine " className="technoAnddiabete "/> 
            </ol>
            <ol> <span className="ol-number">3. TÉLÉMÉDECINE</span> 
            <p>
               Les progrès de la télémédecine ont été parmi les rares doublures argentées de la pandémie. 
               Au cours des deux dernières années, il est devenu clair que non seulement 
               la télémédecine fonctionne, mais qu'elle devient en fait l'option préférée de
               nombreux patients et médecins. De plus, les soins médicaux à distance se sont
               avérés utiles dans de nombreuses disciplines et dans différentes conditions dont le diabète. 
 <br/>
                 <br/>
                 En discutant des différents domaines de traitement spécialisés que les soins à distance ont influencés, 
                 le Blog de télémédecine de roue explique que les programmes de traitement 
                 du diabète connexes se sont avérés très efficaces pour réduire les taux moyens d'hémoglobine
                 A1c des patients, réduire les coûts médicaux et gagner du temps. 
                 Les patients sont restés fidèles aux rendez-vous virtuels et ont été très satisfaits dans l'ensemble, 
                 ce qui indique un avenir radieux pour les soins du diabète à distance. </p>
                 <img src={telemedecine } alt="telemedecine " className="telemedecine "/> 


            </ol>
            
        </ul>
        
       
      </div>
      <div className="newsletter-signup">
    <h2>Inscrivez-vous à notre<br/>
       <strong>Newsletter</strong></h2>
       <p>Recevez les dernières mises à jour et nouvelles directement dans votre boîte de réception.</p>
    <form>
      <input type="email" placeholder="Entrez votre email" required /><br/>
      <br/>
      <button type="submit">S'inscrire</button>
    </form><br/>
    <br/>
    <br/>
  </div>
    </div>
  )
}

export default BlogDiabete
