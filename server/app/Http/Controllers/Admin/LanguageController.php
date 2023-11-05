<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function __invoke(Request $request, $lang)
    {
        abort_if(!in_array($lang, array_column(config('app.supported_locales'), 'code')), 404);

        app()->setLocale($lang);
        session()->put('lang', $lang);

        return back();
    }
}
