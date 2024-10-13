import * as vscode from 'vscode';
import { getRandomShortcut } from './shortcuts';
export function activate(context: vscode.ExtensionContext) {
	showShortcut();
	const disposable = vscode.commands.registerCommand('vscshortcuts.getRandomShortcut', () => {
		showShortcut();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

function showShortcut(){
	var shortcut = getRandomShortcut();
	vscode.window.showInformationMessage(shortcut.description, shortcut.value);
}
