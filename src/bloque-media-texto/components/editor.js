/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmComponentes, { BgbMediaUpload } from "../../assets/components/index";
import mwmFunciones from "../../assets/scripts/mwm_funciones";
import mwmIconos from "../../assets/mwm_iconos";

/**
 * Dependencias internas del bloque
 */
import Controles from "./controles";
import Inspector from "./inspector";

/**
 * Dependencias de librerías
 */

/**
 * Dependencias de WordPress
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

/**
 * Clase que da funcionalidad al Editor
 */
class Editor extends Component {
    /**
     * Constructor de la clase
     * @param {*} props Propiedades del bloque
     */
    constructor(props) {
        super(...arguments);
        this.props = props;
    }

    /**
     * Funcionalidades que se ejecutan cuando se crea el bloque
     */
    componentDidMount() {}

    /**
     * Funcionalidades que se ejecutan cuando se actualiza el bloque
     */
    componentDidUpdate() {}

    /**
     * Funcionalidades de actualización de los atributos
     */

    /**
     * Funcionalidad devuelve el contenido del editor
     */
    render() {
        /**
         * Variables
         */
        const { attributes, setAttributes } = this.props;
        const { imagenSrc, imagenAlt, texto } = attributes;

        const estilos = {};

        /**
         * Funcionalidades
         */

        /**
         * Contenido del editor
         */

        return (
            <Fragment>
                <Controles {...this.props} />
                <Inspector {...this.props} />
                <div className={"bgb bgb-bloque-media-texto"}>
                    <div className={"flex-box"}>
                        <BgbMediaUpload
                            media={imagenSrc}
                            action={media =>
                                setAttributes({ imagenSrc: media.url })
                            }
                            result={
                                <img
                                    className={"bloque-img"}
                                    src={imagenSrc}
                                    alt={imagenAlt}
                                />
                            }
                        />
                    </div>
                    <div className={"flex-box"}>
                        <RichText
                            tagName={"p"}
                            className={"bloque-texto"}
                            value={texto}
                            onChange={nuevoTexto =>
                                setAttributes({ texto: nuevoTexto })
                            }
                            placeholder={__("Introduce un texto")}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

/**
 * Como no exportemos el componente no funca
 */
export default Editor;
