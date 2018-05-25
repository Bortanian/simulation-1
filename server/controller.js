module.exports = {
    getInventory:(req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then( inventory => res.status(200).send(inventory))
        .catch( () => res.status(500).send());
    },
    create:(req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body

        db.create_product([name, price, image_url])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    delete:(req, res) => {
        const db = req.app.get('db');
        const {params} = req;

        db.delete_product([params.id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    }
}