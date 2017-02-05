window.addEventListener("load", function (event) {
    // today
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }
    $('#date').val(yyyy + '-' + mm + '-' + dd);

    $('#syaku').hide();

    $('#clearTop').click(function () {
        inputClear();
    })

    $('#clearBottom').click(function () {
        inputClear();
    })

    $('#switch').change(function () {
        if ($('#switch:checked').val()) {
            $('#syaku').hide();
            $('#cm').show();
        } else {
            $('#syaku').show();
            $('#cm').hide();
        }
    })

    $('#go').click(function () {
        var info = mkText();
        $('#resultData').val(info);
    })

    $('#getResultData').click(function () {
        var clipboard = new Clipboard('.getBtn');
        clipboard.on('success', function (e) {
            //成功時の処理 nope.
        });
        clipboard.on('error', function (e) {
            //失敗時の処理
            alert('コピーに失敗しました。')
        });
    })

    $('#noDate').change(function () {
        if ($('#noDate:checked').val()) {
            $('#date').prop('disabled', true);
        } else {
            $('#date').prop('disabled', false);
        }
    })

    $('#noPlace').change(function () {
        if ($('#noPlace:checked').val()) {
            $('#place').prop('disabled', true);
        } else {
            $('#place').prop('disabled', false);
        }
    })

    $('#noNo').change(function () {
        if ($('#noNo:checked').val()) {
            $('#no').prop('disabled', true);
        } else {
            $('#no').prop('disabled', false);
        }
    })

    $('#noTouha').change(function () {
        if ($('#noTouha:checked').val()) {
            $('#touha').prop('disabled', true);
        } else {
            $('#touha').prop('disabled', false);
        }
    })

    $('#noToukou').change(function () {
        if ($('#noToukou:checked').val()) {
            $('#toukou').prop('disabled', true);
        } else {
            $('#toukou').prop('disabled', false);
        }
    })

    $('#noMei').change(function () {
        if ($('#noMei:checked').val()) {
            $('#mei').prop('disabled', true);
        } else {
            $('#mei').prop('disabled', false);
        }
    })

    $('#noAge').change(function () {
        if ($('#noAge:checked').val()) {
            $('#age').prop('disabled', true);
            $('#part_no').prop('disabled', true);
            $('#part_p').prop('disabled', true);
            $('#part_m').prop('disabled', true);
            $('#part_e').prop('disabled', true);
        } else {
            $('#age').prop('disabled', false);
            $('#part_no').prop('disabled', false);
            $('#part_p').prop('disabled', false);
            $('#part_m').prop('disabled', false);
            $('#part_e').prop('disabled', false);
        }
    })

    $('#noKind').change(function () {
        if ($('#noKind:checked').val()) {
            $('#kind').prop('disabled', true);
        } else {
            $('#kind').prop('disabled', false);
        }
    })

    $('#noHatyou').change(function () {
        if ($('#noHatyou:checked').val()) {
            $('#hatyou_syaku').prop('disabled', true);
            $('#hatyou_sun').prop('disabled', true);
            $('#hatyou_bu').prop('disabled', true);
            $('#hatyou').prop('disabled', true);
        } else {
            $('#hatyou_syaku').prop('disabled', false);
            $('#hatyou_sun').prop('disabled', false);
            $('#hatyou_bu').prop('disabled', false);
            $('#hatyou').prop('disabled', false);
        }
    })

    $('#noZentyou').change(function () {
        if ($('#noZentyou:checked').val()) {
            $('#zentyou_syaku').prop('disabled', true);
            $('#zentyou_sun').prop('disabled', true);
            $('#zentyou_bu').prop('disabled', true);
            $('#zentyou').prop('disabled', true);
        } else {
            $('#zentyou_syaku').prop('disabled', false);
            $('#zentyou_sun').prop('disabled', false);
            $('#zentyou_bu').prop('disabled', false);
            $('#zentyou').prop('disabled', false);
        }
    })

    $('#noSori').change(function () {
        if ($('#noSori:checked').val()) {
            $('#sori_syaku').prop('disabled', true);
            $('#sori_sun').prop('disabled', true);
            $('#sori_bu').prop('disabled', true);
            $('#sori').prop('disabled', true);
        } else {
            $('#sori_syaku').prop('disabled', false);
            $('#sori_sun').prop('disabled', false);
            $('#sori_bu').prop('disabled', false);
            $('#sori').prop('disabled', false);
        }
    })

    $('#noSyakuHatyou').change(function () {
        if ($('#noSyakuHatyou:checked').val()) {
            $('#hatyou_syaku').prop('disabled', true);
            $('#hatyou_sun').prop('disabled', true);
            $('#hatyou_bu').prop('disabled', true);
            $('#hatyou').prop('disabled', true);
        } else {
            $('#hatyou_syaku').prop('disabled', false);
            $('#hatyou_sun').prop('disabled', false);
            $('#hatyou_bu').prop('disabled', false);
            $('#hatyou').prop('disabled', false);
        }
    })

    $('#noSyakuZentyou').change(function () {
        if ($('#noSyakuZentyou:checked').val()) {
            $('#zentyou_syaku').prop('disabled', true);
            $('#zentyou_sun').prop('disabled', true);
            $('#zentyou_bu').prop('disabled', true);
            $('#zentyou').prop('disabled', true);
        } else {
            $('#zentyou_syaku').prop('disabled', false);
            $('#zentyou_sun').prop('disabled', false);
            $('#zentyou_bu').prop('disabled', false);
            $('#zentyou').prop('disabled', false);
        }
    })

    $('#noSyakusori').change(function () {
        if ($('#noSyakusori:checked').val()) {
            $('#sori_syaku').prop('disabled', true);
            $('#sori_sun').prop('disabled', true);
            $('#sori_bu').prop('disabled', true);
            $('#sori').prop('disabled', true);
        } else {
            $('#sori_syaku').prop('disabled', false);
            $('#sori_sun').prop('disabled', false);
            $('#sori_bu').prop('disabled', false);
            $('#sori').prop('disabled', false);
        }
    })

    $('#noNakago').change(function () {
        if ($('#noNakago:checked').val()) {
            $('#nakago').prop('disabled', true);
        } else {
            $('#nakago').prop('disabled', false);
        }
    })

    $('#noSuriage').change(function () {
        if ($('#noSuriage:checked').val()) {
            $('#suriage').prop('disabled', true);
        } else {
            $('#suriage').prop('disabled', false);
        }
    })

    $('#noMekugi').change(function () {
        if ($('#noMekugi:checked').val()) {
            $('#mekugi').prop('disabled', true);
        } else {
            $('#mekugi').prop('disabled', false);
        }
    })

    $('#noKissaki').change(function () {
        if ($('#noKissaki:checked').val()) {
            $('#kissaki').prop('disabled', true);
        } else {
            $('#kissaki').prop('disabled', false);
        }
    })

    $('#noZigane').change(function () {
        if ($('#noZigane:checked').val()) {
            $('#zigane').prop('disabled', true);
        } else {
            $('#zigane').prop('disabled', false);
        }
    })

    $('#noBousi').change(function () {
        if ($('#noBousi:checked').val()) {
            $('#bousi').prop('disabled', true);
        } else {
            $('#bousi').prop('disabled', false);
        }
    })

    $('#noHamon').change(function () {
        if ($('#noHamon:checked').val()) {
            $('#hamon_notare').prop('disabled', true);
            $('#hamon_suguha').prop('disabled', true);
            $('#hamon_gonome').prop('disabled', true);
            $('#hamon_tyouzi').prop('disabled', true);
            $('#hamon_hitutare').prop('disabled', true);
        } else {
            $('#hamon_notare').prop('disabled', false);
            $('#hamon_suguha').prop('disabled', false);
            $('#hamon_gonome').prop('disabled', false);
            $('#hamon_tyouzi').prop('disabled', false);
            $('#hamon_hitutare').prop('disabled', false);

        }
    })

    $('#touhaCp1').click(function () {
        cpVal('toukou', 'touha')
    })

    $('#touhaCp2').click(function () {
        cpVal('mei', 'touha')
    })

    $('#meiCp').click(function () {
        cpVal('mei', 'toukou')
    })

}, false);

function mkText() {
    var ret = '';
    var dateInfo = $('#date').val();
    var placeInfo = $('#place').val();
    var touhaInfo = $('#touha').val();
    var noInfo = $('#no').val();
    var toukouInfo = $('#toukou').val();
    var meiInfo = $('#mei').val();
    var ageInfo = $('#age').val();
    var partInfo = $('input[name=part]:checked').val();
    var kindInfo = $('#kind').val();
    var hatyouInfo = $('#hatyou').val();
    var zentyouInfo = $('#zentyou').val();
    var soriInfo = $('#sori').val();
    var hatyouSyakuInfo = '';
    if ($('#hatyou_syaku').val() !== '' && $('#hatyou_syaku').val() > 0) {
        hatyouSyakuInfo = $('#hatyou_syaku').val() + '尺';
    }
    if ($('#hatyou_sun').val() !== '' && $('#hatyou_sun').val() > 0) {
        hatyouSyakuInfo = hatyouSyakuInfo + $('#hatyou_sun').val() + '寸';
    }
    if ($('#hatyou_bu').val() !== '' && $('#hatyou_bu').val() > 0) {
        hatyouSyakuInfo = hatyouSyakuInfo + $('#hatyou_bu').val() + '分';
    }
    var zentyouSyakuInfo = '';
    if ($('#zentyou_syaku').val() !== '' && $('#zentyou_syaku').val() > 0) {
        zentyouSyakuInfo = $('#zentyou_syaku').val() + '尺';
    }
    if ($('#zentyou_sun').val() !== '' && $('#zentyou_sun').val() > 0) {
        zentyouSyakuInfo = zentyouSyakuInfo + $('#zentyou_sun').val() + '寸';
    }
    if ($('#zentyou_bu').val() !== '' && $('#zentyou_bu').val() > 0) {
        zentyouSyakuInfo = zentyouSyakuInfo + $('#zentyou_bu').val() + '分';
    }
    var soriSyakuInfo = '';
    if ($('#sori_syaku').val() !== '' && $('#sori_syaku').val() > 0) {
        soriSyakuInfo = $('#sori_syaku').val() + '尺';
    }
    if ($('#sori_sun').val() !== '' && $('#sori_sun').val() > 0) {
        soriSyakuInfo = soriSyakuInfo + $('#sori_sun').val() + '寸';
    }
    if ($('#sori_bu').val() !== '' && $('#sori_bu').val() > 0) {
        soriSyakuInfo = soriSyakuInfo + $('#sori_bu').val() + '分';
    }
    var nakagoInfo = $('#nakago').val();
    var suriageInfo = $('#suriage').val();
    var mekugiInfo = $('#mekugi').val();
    var kissakiInfo = $('#kissaki').val();
    var ziganeInfo = $('#zigane').val();
    var bousiInfo = $('#bousi').val();
    var notareInfo = $('#hamon_notare:checked').val();
    var suguhaInfo = $('#hamon_suguha:checked').val();
    var gonomeInfo = $('#hamon_gonome:checked').val();
    var tyouziInfo = $('#hamon_tyouzi:checked').val();
    var hitutareInfo = $('#hamon_hitutare:checked').val();

    if (!$('#noDate:checked').val()) {
        ret = '鑑賞日：' + dateInfo + '\n';
    }
    if (!$('#noPlace:checked').val()) {
        ret = ret + '施設名：' + placeInfo + '\n';
    }
    if (!$('#noNo:checked').val()) {
        ret = ret + '番号：' + noInfo + '\n';
    }
    if (!$('#noTouha:checked').val()) {
        ret = ret + '刀派：' + touhaInfo + '\n';
    }
    if (!$('#noToukou:checked').val()) {
        ret = ret + '刀工：' + toukouInfo + '\n';
    }
    if (!$('#noMei:checked').val()) {
        ret = ret + '銘：' + meiInfo + '\n';
    }
    if (!$('#noAge:checked').val()) {
        ret = ret + '年代：' + ageInfo + partInfo + '\n';
    }
    if (!$('#noKind:checked').val()) {
        ret = ret + '種類：' + kindInfo + '\n';
    }

    if ($('#switch:checked').val()) {
        if (!$('#noHatyou:checked').val()) {
            ret = ret + '刃長：' + hatyouInfo + 'cm\n';
        }
        if (!$('#noZentyou:checked').val()) {
            ret = ret + '全長：' + zentyouInfo + 'cm\n';
        }
        if ($(!'#noSori:checked').val()) {
            ret = ret + '反り：' + soriInfo + 'cm\n';
        }
    } else {
        if ($(!'#noSyakuHatyou:checked').val()) {
            ret = ret + '刃長：' + hatyouSyakuInfo + '\n';
        }
        if ($(!'#noSyakuZentyou:checked').val()) {
            ret = ret + '全長：' + zentyouSyakuInfo + '\n';
        }
        if ($(!'#noSyakusori:checked').val()) {
            ret = ret + '反り：' + soriSyakuInfo + '\n';
        }
    }
    if (!$('#noNakago:checked').val()) {
        ret = ret + '茎：' + nakagoInfo + '\n';
    }
    if (!$('#noSuriage:checked').val()) {
        ret = ret + '磨上：' + suriageInfo + '\n';
    }
    if (!$('#noMekugi:checked').val()) {
        ret = ret + '目釘孔：' + mekugiInfo + '個\n';
    }
    if (!$('#noKissaki:checked').val()) {
        ret = ret + '切っ先：' + kissakiInfo + '\n';
    }
    if (!$('#noZigane:checked').val()) {
        ret = ret + '地鉄：' + ziganeInfo + '\n';
    }
    if (!$('#noBousi:checked').val()) {
        ret = ret + '帽子：' + bousiInfo + '\n';
    }
    if (!$('#noHamon:checked').val()) {
        var hamonInfo = '';
        if (notareInfo) {
            hamonInfo = notareInfo;
        }
        if (suguhaInfo) {
            hamonInfo = getCommna(hamonInfo);
            hamonInfo = hamonInfo + suguhaInfo;
        }
        if (gonomeInfo) {
            hamonInfo = getCommna(hamonInfo);
            hamonInfo = hamonInfo + gonomeInfo;
        }
        if (tyouziInfo) {
            hamonInfo = getCommna(hamonInfo);
            hamonInfo = hamonInfo + tyouziInfo;
        }
        if (hitutareInfo) {
            hamonInfo = getCommna(hamonInfo);
            hamonInfo = hamonInfo + hitutareInfo;
        }
        ret = ret + '刃文：' + hamonInfo + '\n';
    }
    return ret;

}

function getCommna(str) {
    if (str.length !== 0) {
        str = str + '　'
    }
    return str;
}

function inputClear() {
    $('#touha').val('');
    $('#no').val('');
    $('#toukou').val('');
    $('#mei').val('');
    $('#age').val('');
    $('input[name=part]').val(['']);
    $('#kind').val('');
    $('#hatyou').val('');
    $('#zentyou').val('');
    $('#sori').val('');
    $('#hatyou_syaku').val('');
    $('#hatyou_sun').val('');
    $('#hatyou_bu').val('');
    $('#zentyou_syaku').val('');
    $('#zentyou_sun').val('');
    $('#zentyou_bu').val('');
    $('#sori_syaku').val('');
    $('#sori_sun').val('');
    $('#sori_bu').val('');
    $('#nakago').val('');
    $('#suriage').val('');
    $('#mekugi').val('');
    $('#kissaki').val('');
    $('#zigane').val('');
    $('#bousi').val('');
    $('#hamon_notare').prop('checked', false);
    $('#hamon_suguha').prop('checked', false);
    $('#hamon_gonome').prop('checked', false);
    $('#hamon_tyouzi').prop('checked', false);
    $('#hamon_hitutare').prop('checked', false);
}

function cpVal(target, data) {
    $('#' + target).val($('#' + data).val());
}
