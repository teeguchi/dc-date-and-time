/**
 * dc-date-and-time v1.0
 * Display of current date and time.
 * Copyright 2021, TeeGuchi
 * 
 * Released under the MIT License.
 * https://github.com/teeguchi/dc-date-and-time/blob/master/LICENSE
 */

/** 
 * 現在の日付と時刻の取得
 * 
 * @return object Current date and time.
 */
function getCdt() {
	const cdt = new Date();
	
	return {
		y: cdt.getFullYear(),
		m: cdt.getMonth(),
		d: cdt.getDate(),
		hr: cdt.getHours(),
		min: cdt.getMinutes(),
		w: cdt.getDay()
	};
}

/**
 * フォーマット
 * 
 * @param object cdt Current date and time.
 */
 
/* フォーマット_A */
function getFormatA(cdt) {
	const year = cdt.y;
	const month = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const date = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	return year + '/' + month + '/' + date + '_' + hour + ':' + minute;
}

/* フォーマット_B */
function getFormatB(cdt) {
	const year = cdt.y;
	const month = cdt.m < 10 ? '0' + (cdt.m + 1) : cdt.m + 1;
	const date = cdt.d < 10 ? '0' + cdt.d : cdt.d;
	const week = ['（日）', '（月）', '（火）', '（水）', '（木）', '（金）', '（土）'];
		
	return year + '/' + month + '/' + date + week[cdt.w];
}

/* フォーマット_C */
function getFormatC(cdt) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const week = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
	
	return year + '年' + month + '月' + date + '日 ' + week[cdt.w];
}

/* フォーマット_D */
function getFormatD(cdt) {
	const year = cdt.y;
	const month = cdt.m + 1;
	const date = cdt.d;
	const hour = cdt.hr < 10 ? '0' + cdt.hr : cdt.hr;
	const minute = cdt.min < 10 ? '0' + cdt.min : cdt.min;
	
	return year + '年' + month + '月' + date + '日 ' + hour + ':' + minute;
}

/**
 * フォーマットの生成
 * 
 * @return array
 */
function generateFormats(cdt) {
	
	return [
		getFormatA(cdt),
		getFormatB(cdt),
		getFormatC(cdt),
		getFormatD(cdt)
	];
}

/**
 * select要素内のHTML
 * 
 * @return string Rendering of select element.
 */
function selectRenderHtml() {
	dcdtFormats = generateFormats(getCdt());
	let html = '';
	for (let i = 0; i < dcdtFormats.length; i++) {
		html += '<option value="' + dcdtFormats[i] + '">' + dcdtFormats[i] + '</option>';
	}
	
	return html;
}

jQuery(function($) {
	$('.dcdt-wrap').each(function() {
		/* select要素に挿入 */
		const dcdtSelect = $(this).find('.dcdt-select'); 
		dcdtSelect.html(selectRenderHtml());
		
		/* Copy */
		$(this).find('.dcdt-cpy').click(function() {
			navigator.clipboard.writeText(dcdtSelect.val());
		});
		
		/* Refresh */
		$(this).find('.dcdt-ref').click(function() {
			let selecIdx = 0;
			dcdtSelect.children('option:selected').each(function() {
				selecIdx = $(this).index(); // 選択状態の要素のインデックス
			});
			dcdtSelect.html(selectRenderHtml()); // select要素に挿入
			dcdtSelect.children('option').each(function() {
				if ($(this).index() == selecIdx) {
					dcdtSelect.val($(this).val()); // 選択状態に設定
				}
			});
		});
	});
});
