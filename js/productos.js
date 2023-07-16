/* Definir clase producto */
class Producto {

    /* Propiedades */
    _sku = null;
    _name = "Default";
    _price = 0;
    _offer = 0;
    _image = "productDefault.png";

    /* El constructor de la clase */
    constructor(objProduct ) {

        this._sku = objProduct.sku;
        this._name = objProduct.name;
        this._price = +objProduct.price;
        this._offer = +objProduct.offer;

        /* Validar si se ingreso una imagen */
        if (objProduct.image != undefined) {
            this._image = objProduct.image;
        }

    }

    /* Obtener atributos */
    get sku() {
        return this._sku.trim().toUpperCase();
    }
    get name() {
        return this._name.trim();
    }
    get priceOriginal() {
        return this._price.toFixed(2);
    }
    get priceDescuento() {
        return ((this._offer * 100) + "%");
    }
    get priceFinal() {
        return (this._price - (this._price * this._offer)).toFixed(2);
    }
    get image() {
        return ("img/productos/" + this._image)
    }
}