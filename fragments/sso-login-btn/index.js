renderSSOLoginForm()

function renderSSOLoginForm() {
    let openIdLoginForm = buildOpenIdConnectLoginForm()

    let submitButton = buildSubmitButton()

    submitButton.onclick = function () {
        openIdLoginForm.submit()
    }

    openIdLoginForm.appendChild(submitButton)

    document.querySelector(".sso-login-btn").appendChild(openIdLoginForm)
}

function buildOpenIdConnectLoginForm() {
    let form = document.createElement("form")
    form.setAttribute("action", configuration.callbackURL + "/-/login/openid_connect_request?p_p_state=maximized")
    form.setAttribute("method", "post")

    let formDate = buildInputHiddenElement("_com_liferay_login_web_portlet_LoginPortlet_formDate", new Date().getTime())
    let saveLastPath = buildInputHiddenElement("_com_liferay_login_web_portlet_LoginPortlet_saveLastPath", "false")
    let inputConnectorName = buildInputHiddenElement("_com_liferay_login_web_portlet_LoginPortlet_OPEN_ID_CONNECT_PROVIDER_NAME", configuration.openIdProviderName)
    let redirect = buildInputHiddenElement("_com_liferay_login_web_portlet_LoginPortlet_redirect", "")

    form.appendChild(formDate)
    form.appendChild(saveLastPath)
    form.appendChild(inputConnectorName)
    form.appendChild(redirect)

    return form
}

function buildInputHiddenElement(name, value) {
    let elem = document.createElement("input")
    elem.setAttribute("type", "hidden")
    elem.setAttribute("name", name)
    elem.setAttribute("id", name)
    elem.value = value
    return elem
}

function buildSubmitButton() {
    let submitButton = document.createElement("button")
    submitButton.setAttribute("type", "button")
    submitButton.innerText = configuration.buttonText
    return submitButton
}