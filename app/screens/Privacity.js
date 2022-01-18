// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";
import { GeneralTitle } from "../styles/GeneralStyles";
import {
  PrivacityWrapper,
  PrivacityText,
  PrivacityTitle,
  PrivacitySubtitle
} from "../styles/screens/PrivacityStyles";
import { View } from "react-native";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function LoginPlan({ navigation }) {
  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header />
        <PrivacityWrapper>
          <View style={{ height: 50 }} />
          <GeneralTitle>Aviso de privacidad</GeneralTitle>
          <PrivacityText>
            <PrivacityTitle>Introducción</PrivacityTitle> {"\n"}
            {"\n"}
            Con la finalidad de ayudar a encontrar con más facilidad lugares de
            apoyo o algún servicio que desees solicitar desde tu móvil, se creó
            HELP APP, como una herramienta para buscar y pedir la ayuda que
            necesites cuando lo necesites, en la aplicación te registras para
            tenerte como un usuario y como un cliente, no solo de la aplicación,
            si no del servicio que desees solicitar como ayuda. {"\n"}
            {"\n"}
            Esta Política de privacidad le ayudará a entender mejor cómo
            recopilamos, usamosy compartimos su información personal.
            Actualizaremos esta política de privacidadante cualquier cambio en
            nuestras prácticas de privacidad. Si hay algún cambio significativo,
            se lo notificaremos (por correo electrónico). {"\n"}
            {"\n"}
            HELP APP debe recopilar cierta información para operar,
            proporcionar, mejorar, comprender, personalizar, respaldar y
            comercializar nuestros Servicios, incluso cuando instala, accede o
            usa nuestros Servicios. {"\n"}
            {"\n"}
            La información que recibimos y recopilamos dependen de cómo utilice
            nuestros Servicios. Requerimos cierta información para brindar
            nuestros Servicios y sin ella no podremos brindarle nuestros
            Servicios. Por ejemplo, debe proporcionar su número de teléfono
            móvil, Identificación oficial y una foto selfie para poder validar
            su identidad {"\n"}
            {"\n"}
            <PrivacityTitle>Nuestros valores </PrivacityTitle> {"\n"}
            {"\n"}
            La forma de trabajar de nuestra empresa la distinguen nuestros
            valores, los cuales son:
            {"\n"}
            {"\n"}
            <PrivacitySubtitle>Transparencia</PrivacitySubtitle>
            {"\n"}
            En todos los procesos internos de la aplicación, así como la
            información procesadadentro de la aplicación para mantener una
            comunidad segura
            {"\n"}
            <PrivacitySubtitle>Excelencia</PrivacitySubtitle>
            {"\n"}
            Buscamos ofrecer un servicio de excelencia mejorando los procesos,
            actualizando contantemente y facilitando el uso de nuestra
            aplicación
            {"\n"}
            <PrivacitySubtitle>Diversidad</PrivacitySubtitle>
            {"\n"}
            No se discrimina por orientación sexual, ideologías o religión,
            nuestra aplicación está abierta para todos
            {"\n"}
            <PrivacitySubtitle>Impacto social</PrivacitySubtitle>
            {"\n"}
            El compromiso con la comunidad, la creación de oportunidades para la
            sociedad
            {"\n"}
            <PrivacitySubtitle>Seguridad</PrivacitySubtitle>
            {"\n"}
            Una comunidad segura dentro de la aplicación tanto para la gente que
            busca un servicio como para los que los ofrecen.
            {"\n"}
            <PrivacitySubtitle>Innovación</PrivacitySubtitle>
            {"\n"}
            Ofrecemos una opción de conexión entre personas para dar exposición
            a profesionales y profesionistas dentro de la aplicación acompañados
            de las mejoresherramientas digitales
            {"\n"}
            {"\n"}
            <PrivacityTitle>Sobre tu información </PrivacityTitle> {"\n"}
            {"\n"}
            Para nosotros es muy importante la información de nuestros clientes,
            ya que esta será el camino y el volante que nos conduzca a facilitar
            tus necesidades, procurandocon ello una agilidad a tus ideas,
            proyectos, problemas y soluciones para los cualesacudes a esta
            aplicación (HELP APP). {"\n"}
            {"\n"}
            Aceptando el uso de la aplicación darás permiso para el acceso al
            sistema operativo del dispositivo móvil.{"\n"}
            {"\n"}
            Permiso para el uso de la cámara, accesando a fotos del dispositivo
            móvil, siendo así que para usar de manera correcta la aplicación se
            te pedirá que tomesuna foto frontal del rostro de la persona que va
            a usar la aplicación para asegurarnos y comprobar de que lo
            utilizara una persona real y no se preste a fraudes. {"\n"}
            {"\n"}
            Permiso para el acceso al audio, accesando al micrófono del
            dispositivo móvil yaque se usarán audios de voz para comunicarse en
            nuestra aplicación. {"\n"}
            {"\n"}
            Permiso para el acceso a tus contactos del dispositivo móvil, al
            momento de mandar el teléfono podrá contactar de manera más fácil y
            podrás agregar o quitarservicios de tus contactos. {"\n"}
            {"\n"}
            Nuestros Servicios tienen funciones opcionales que, si usted las
            utiliza, requieren que recopilemos información adicional para
            proporcionar dichas funciones. Se le notificará de dicha
            recopilación, según corresponda. Si elige no proporcionar la
            información necesaria para usar una función, no podrá usarla. Por
            ejemplo, no puede validar su identidad si no nos permite el acceso a
            su galería de fotos o a la cámara para que pueda cargar o tomar la
            fotografía desde su dispositivo. Los permisos se pueden administrar
            a través de su menú de Configuración en dispositivos Android e iOS.{" "}
            {"\n"}
            {"\n"}
            <PrivacityTitle>Información que proporciona </PrivacityTitle>
            {"\n"}
            {"\n"}
            Información de su cuenta. Debe proporcionar su número de teléfono
            móvil e información básica (incluido un nombre de perfil de su
            elección) para crear una cuenta para buscar servicios en HELP APP.
            Si no nos proporciona esta información, no podrá crear una cuenta
            para usar nuestros Servicios. Puede agregar otra información a su
            cuenta, como una imagen de perfil e información
            {"\n"}
            {"\n"}
            Tus mensajes.{"\n"}
            No conservamos sus mensajes en el curso ordinario de la prestación
            de nuestros Servicios. En cambio, sus mensajes se almacenan en su
            dispositivo y, por lo general, no se almacenan en nuestros
            servidores. Una vez que se entregan sus mensajes, se eliminan de
            nuestros servidores. Los siguientes escenarios describen las
            circunstancias en las que podemos almacenar sus mensajes en el curso
            de la entrega:
            {"\n"}
            {"\n"}Mensajes no entregados. Si un mensaje no se puede entregar de
            inmediato (por ejemplo, si el destinatario está desconectado), lo
            mantenemos en forma encriptada en nuestros servidores hasta por 30
            días mientras intentamos entregarlo. Si un mensaje aún no se entrega
            después de 30 días, lo eliminamos.
            {"\n"}
            {"\n"}Reenvío de medios. Cuando un usuario reenvía medios dentro de
            un mensaje, almacenamos esos medios temporalmente en forma
            encriptada en nuestros servidores para ayudar a una entrega más
            eficiente de reenvíos adicionales.
            {"\n"}
            {"\n"}Ofrecemos cifrado de extremo a extremo para nuestros
            Servicios. El cifrado de extremo a extremo significa que sus
            mensajes están encriptados para protegernos contra nosotros y
            terceros de leerlos.
            {"\n"}
            {"\n"}
            <PrivacityTitle>Sus derechos sobre la información</PrivacityTitle>
            {"\n"}
            {"\n"}Los derechos de nuestros clientes son sumamente esenciales y
            de importancia para nosotros, podemos decirte que se conservara toda
            tu información personal, a la cualtu tendrás acceso, podrás
            modificarla según tus necesidades, aclarando, que uno de los
            principales derechos a los cuales tienes es la transparencia por
            medio de la cual, podrás saber con nuestras sugerencias, para que es
            utilizada toda esta información a la cual nos das acceso.
            {"\n"}
            {"\n"}
            <PrivacityTitle>A donde va tu información</PrivacityTitle>
            {"\n"}
            {"\n"}
            En primer término queremos que este seguro que el uso de la
            información que nosaportes, llegara a los lugares que también tengan
            niveles altos de seguridad, segúntus necesidades ya sean en nuestro
            país o en algún otro, se derramara la información necesaria y
            solamente la útil para que se resuelvan tus necesidades, sin
            embrago, hay que tomar en cuenta que México, se divide en entidades
            federativas y que cada una de ellas podría regirse por su propia
            ley, como tambiénpor normas nacionales, esto se aplicaría de la
            misma forma con otros países ya queellos también tienen su autonomía
            y soberanía con la cual manejan su propio marcode derecho, sin
            embargo nos comprometemos a que tu información llegue a buenasmanos.
            {"\n"}
            {"\n"}
            <PrivacitySubtitle>
              La protección de tu información
            </PrivacitySubtitle>
            {"\n"}
            {"\n"}
            El equipo trabaja arduamente para proteger su información y
            garantizar la seguridad e integridad de nuestra aplicación, es
            decir, se procurará que no entren agentes externos malignos que
            demeriten nuestro desempeño. No obstante, todos sabemos que ningún
            método de transmisión a través de internet o método de
            almacenamiento electrónico puedeser absolutamente seguro. Por lo
            tanto, garantizamos la seguridad absoluta de su información personal
            dentro de esta aplicación, sin embargo, aunque tengamos un esmeroen
            la revisión de clientes y proveedores, no se puede garantizar el
            comportamiento al 100% ético de terceros.
            {"\n"}
            {"\n"}
            <PrivacitySubtitle>En cuanto a nuestras cookies</PrivacitySubtitle>
            {"\n"}
            {"\n"}
            Las cookies de nuestra aplicación son para que recuerden información
            la cual tú solicitaste o descargaste, lo anterior para saber un
            patrón de tus necesidades, gustos y perfiles, lo cual se te menciona
            desde estos momentos que el permitirlas, es darle una facilidad a
            esta aplicación para resolver tus prioridades.
            {"\n"}
            {"\n"}
            <PrivacitySubtitle>Cómo puede contactarnos</PrivacitySubtitle>{" "}
            {"\n"}
            {"\n"}
            Si desea solicitar información, aclaraciones o presentar una queja
            sobre cómo procesamossus datos personales, contacte:
            {"\n"}
            {"\n"}
            1° Datos de la persona moral y su sitio web helpapp.mx Prisma
            Inbound y Creatividad sa de c.v. 2° Domicilio fiscal de empresa
            Calle Xitli col. La Xinantecatl cp 52159 Metepec Estado de Mexico{" "}
            {"\n"} {"\n"}
            Correo electrónico help.app@hotmail.com Tel.5565789805 o +52 729 133
            4990
          </PrivacityText>
          <View style={{ height: 50 }} />
        </PrivacityWrapper>
      </Layout>
    );
  }
}
