import BasePage from "./Base.page";

class CartPage{
    static get url(){
        return "/";
    }

    static visit(){
        cy.visit(this.url);
    }
}

export default BasePage;