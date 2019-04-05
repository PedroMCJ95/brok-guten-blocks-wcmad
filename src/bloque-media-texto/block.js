/**
 * Archivo principal del bloque que arranca el código
 */

/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmComponentes from "../assets/components/index";
import mwmAtributos from "../assets/scripts/mwm_atributos";
import mwmFunciones from "../assets/scripts/mwm_funciones";
import mwmIconos from "../assets/mwm_iconos";
import "../assets/styles/mwm_estilos_editor.scss";
import "../assets/styles/mwm_estilos_inspector.scss";

/**
 * Dependencias internas del bloque
 */
import Editor from "./components/editor";
import "./styles/editor.scss";
import "./styles/style.scss";

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
 * Atributos del bloque
 */
const attrs = {
    mwmAtributos,
    imagenSrc: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".bloque-img"
    },
    imagenAlt: {
        type: "string",
        source: "attribute",
        attribute: "alt",
        selector: ".bloque-img"
    },
    texto: {
        type: "string",
        source: "html",
        selector: ".bloque-texto"
    }
};

/**
 * Variables globales
 */
var GLOBALS = {};

/**
 * Nombre: bloque-media-texto
 * Slug: brok-guten-blocks
 * Descripción: Descripcion del bloque
 */
registerBlockType("brok-guten-blocks/bloque-media-texto", {
    title: __("Media texto"),
    icon: "editor-textcolor",
    description: __("Bloque que combina una imagen y un texto"),
    keywords: [__("bgb"), __("media"), __("texto")],
    attributes: attrs,
    category: "brok-guten-blocks",
    edit: Editor,
    save(props) {
        /**
         * Variables
         */
        const { attributes } = props;
        const { imagenSrc, imagenAlt, texto } = attributes;

        const estilos = {};

        /**
         * Funcionalidades
         */

        /**
         * Contenido del front-end del bloque
         */
        return (
            <Fragment>
                <div className={"bgb bgb-bloque-media-texto"}>
                    <div className={"flex-box"}>
                        <img
                            className={"bloque-img"}
                            src={imagenSrc}
                            alt={imagenAlt}
                        />
                    </div>
                    <div className={"flex-box"}>
                        <RichText.Content
                            tagName={"p"}
                            className={"bloque-texto"}
                            value={texto}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
});
