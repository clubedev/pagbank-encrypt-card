export class PagbankEncryptCard {
    static sdkLoaded = false;

    static async encrypt(publicKey, card) {
        this.initPagBank();

        let retries = 10;
        while (retries > 0) {
            if (this.sdkLoaded || typeof PagSeguro !== 'undefined') {
                break;
            }

            await this.sleep(0.5);
            retries--;
        }

        if (!this.sdkLoaded || typeof PagSeguro === 'undefined') {
            throw [{
                code: 'SDK_NOT_LOADED',
                message: 'Houve algum erro ao carregar o PagBank SDK!'
            }];
        }

        const encryptedCard = PagSeguro.encryptCard({
            publicKey: publicKey,
            ...card
        });

        if (encryptedCard.hasErrors) {
            throw encryptedCard.errors;
        }

        return encryptedCard.encryptedCard;
    }

    static initPagBank() {
        if (typeof window.PagSeguro !== 'undefined') {
            this.sdkLoaded = true;
            return;
        }

        if (!document.getElementById('pagseguro-sdk-front')) {
            const script = document.createElement('script');
            script.src = 'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js';
            script.id = 'pagseguro-sdk-front';
            script.async = true;
            script.onload = () => {
                this.sdkLoaded = true;
            };
            document.head.appendChild(script);
        } else {
            this.sdkLoaded = true;
        }
    }

    static sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
}
