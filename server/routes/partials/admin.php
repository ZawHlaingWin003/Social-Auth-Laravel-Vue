<?php

use App\Http\Controllers\Admin\LanguageController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/lang/{lang}', LanguageController::class)->name('lang.switch');
Route::middleware(['setLocale'])->group(function () {
    Auth::routes();
});
