import React, { useEffect, useState } from 'react';

function PWAInstall() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);


    useEffect(() => {
        window.addEventListener('appinstalled', () => {
            // Esconder a promoção de instalação fornecida pela app
            setShowPrompt(false)
            // Limpar o deferredPrompt para que seja coletado
            setDeferredPrompt(null);
            // Opcionalmente, enviar evento de analytics para indicar instalação com sucesso
            console.log('PWA was installed');
            alert("Aplicativo instalado com sucesso!")
        });
    }, [setShowPrompt])


    useEffect(() => {


        window.addEventListener('beforeinstallprompt', (e) => {
            // Impede que o mini-infobar apareça em mobile
            e.preventDefault();
            // Guarda evento para que possa ser disparado depois.
            setDeferredPrompt(e);
            // Atualiza UI notifica usuário que pode instalar PWA
            setShowPrompt(true)
            // Opcionalmente, enviar eventos de analytics que promo de instalação PWA foi mostrado.
            console.log(`'beforeinstallprompt' event was fired.`);
        });
    }, [setShowPrompt])

    const handleCancel = () => setShowPrompt(false)

    const handleInstall = async () => {
        // Esconde a promoção de instalação fornecida pelo app
        setShowPrompt(false)
        // Mostra prompt de instalação
        deferredPrompt.prompt();
        // Espera usuário responder ao prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Opcionalmente, enviar evento analytics com resultado da escolha do usuário
        console.log(`User response to the install prompt: ${outcome}`);
        // Usamos o prompt e não podemos usar de novo; jogue fora
        setDeferredPrompt(null);
    }

    return (
        <> {showPrompt &&
            <div style={{backgroundColor:'lime', color:'#000'}}>
                <p>INSTALAR O APLICATIVO?</p>
                <button onClick={handleInstall}>Instalar</button>
                <button onClick={handleCancel}>Cancelar</button>
            </div>
        }
        </>
    );
}

export default PWAInstall;
