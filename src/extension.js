const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let templates = [];

function loadTemplates(context) {
    const templatesPath = path.join(context.extensionPath, 'src/templates.json');
    try {
        const data = fs.readFileSync(templatesPath, 'utf8');
        templates = JSON.parse(data);
    } catch (err) {
        vscode.window.showErrorMessage('Erreur chargement templates : ' + err.message);
        templates = [];
    }
    return templates;
}

function ListTemplateByLanguage(languageId) {
    // Ne retourner que les templates correspondant au langage détecté
    return templates
        .filter(t => t.langs && ((t.langs.includes(languageId) || (languageId === "plaintext"))))
        .map(t => t.name);
}

function NameTemplate2TemplatePath(name_template) {
    const entry = templates.find(t => t.name === name_template);
    return entry ? entry.path : null;
}

function ContenuTemplate(context, template_path) {
    if (!template_path) return "";
    try {
        const fullPath = path.join(context.extensionPath, template_path);
        return fs.readFileSync(fullPath, 'utf8');
    } catch (err) {
        vscode.window.showErrorMessage('Erreur lecture template : ' + err.message);
        return "";
    }
}

function activate(context) {
    loadTemplates(context);

    let disposableAjouter = vscode.commands.registerCommand('extension.AjouterTemplate', async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        // Récupérer le languageId du fichier actif
        const languageId = editor.document.languageId;

        // Afficher un menu rapide avec les templates correspondant au langage
        const templateNames = ListTemplateByLanguage(languageId);
        if (templateNames.length === 0) {
            vscode.window.showInformationMessage('Aucun template disponible pour ce langage : ' + languageId);
            return;
        }

        const selectedTemplate = await vscode.window.showQuickPick(templateNames, {
            placeHolder: 'Sélectionnez un template à insérer (language detecté: "' + languageId + '")'
        });

        if (!selectedTemplate) return; // Annulé

        const templatePath = path.join("src/templates", NameTemplate2TemplatePath(selectedTemplate));
        const templateContent = ContenuTemplate(context, templatePath);

        if (templateContent) {
            const position = editor.selection.active;
            editor.edit(editBuilder => {
                editBuilder.insert(position, "\n" + templateContent + "\n");
            });
        } else {
            vscode.window.showInformationMessage('Aucun contenu de template à insérer.');
        }
    });

    context.subscriptions.push(disposableAjouter);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
